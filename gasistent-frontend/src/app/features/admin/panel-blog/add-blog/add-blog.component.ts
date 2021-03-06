import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AlertDialogBodyComponent } from '../../../../shared/components/alert-dialog-body/alert-dialog-body.component';
import { BlogService } from '../../../../core/services/blog.service';
import { ImageService } from '../../../../core/services/image.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from '../../../../shared/components/dialog-body/dialog-body.component';
import {TokenStorageService} from '../../../../core/services/token-storage.service';


interface Tag{
  name: string;
}

interface ImgurImage{
  data: {
    title: string;
    description: string;
    link: string;
  };
}

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css', '../../../../../assets/styles/link-styles.css']
})
export class AddBlogComponent implements OnInit {
  public Editor = ClassicEditor;
  public model = {
    editorData: ''
  };

  public selectedFile: File;
  public previewImage: any;
  public tags: Tag[] = [];
  public title: string;
  public content: string;
  public blogId: string;
  public showSpinner = false;

  public imageData: ImgurImage;

  constructor(private tokenStorageService: TokenStorageService,
              private imageService: ImageService,
              private blogService: BlogService,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  processFile(imageInput: any){
    this.selectedFile = imageInput.files[0];
    this.previewImageLoad();
  }

  previewImageLoad(){
    const reader = new FileReader();
    reader.onloadend = e => {
      this.previewImage = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  open_dialog(message: string){
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '550px',
      height: '200px',
      data: {
        message
      }
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm){
        this.submit_blog();
      }
    });
  }

  open_alert_dialog(message: string){
    this.dialog.open(AlertDialogBodyComponent, {
      width: '550px',
      height: '200px',
      data: {
        message
      }
    });
  }
  async submit_blog(){
    this.showSpinner = true;
    this.imageData = await this.imageService.upload_image(this.selectedFile).toPromise() as ImgurImage;
    const now = new Date();

    const blog = {
      title: this.title,
      content: this.model.editorData,
      imageUrl: this.imageData.data.link,
      tags: [],
      createdAt: now,
      author: this.tokenStorageService.getUser()
    };
    this.tags.forEach((element: any) => {
      blog.tags.push(element);
    });
    this.blogService.add_blog(blog).subscribe((response: any) => {
      this.blogId = response.id;
      this.showSpinner = false;
      this.open_alert_dialog(`Post je ugledao svetlost dana!`);
      this.title = '';
      this.content = '';
      this.previewImage = '';
      this.tags = [];
    });
  }

  addTag(tag: Tag): void{
    this.tags.push(tag);
  }
}
