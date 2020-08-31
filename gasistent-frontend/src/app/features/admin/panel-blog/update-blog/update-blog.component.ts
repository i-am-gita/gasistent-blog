import {Component, OnInit} from '@angular/core';
import { ImageService } from '../../../../core/services/image.service';
import { AlertDialogBodyComponent } from '../../../../shared/components/alert-dialog-body/alert-dialog-body.component';
import { DialogBodyComponent } from '../../../../shared/components/dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../../../../core/services/blog.service';
import { ActivatedRoute, Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Blog{
  id: string;
  title: string;
  content: string;
  imageUrl: any;
  tags: Tag[];
  createdAt: string;
  author: Author;
}

interface Tag{
  name: string;
}

interface Author{
  username: string;
  skillTitle: string;
  profileImage: string;
}

interface ImgurImage{
  data: {
    title: string;
    description: string;
    link: string;
  };
}

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css', '../../../../../assets/styles/link-styles.css']
})
export class UpdateBlogComponent implements OnInit {
  public Editor = ClassicEditor;

  public blogId: string;
  public tags: Tag[];
  public selectedFile: any;
  public showSpinner = false;
  public blogProps: Blog = {
    id: '',
    title: '',
    content: '',
    imageUrl: '',
    tags: [],
    createdAt: '',
    author: {
      username: '',
      skillTitle: '',
      profileImage: ''
    }
  };

  constructor(private activeRoute: ActivatedRoute,
              private dialog: MatDialog,
              private blogService: BlogService,
              private imageService: ImageService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((response) => {
      this.blogId = response.id;
    });
    this.get_blog_info();
  }

  get_blog_info(){
    this.blogService.get_single_blog(this.blogId).subscribe((response: any) => {
      console.log(response);
      this.blogProps.id = response.id;
      this.blogProps.title = response.title;
      this.blogProps.content = response.content;
      console.log(this.blogProps.content);
      console.log(this.tags);
      this.blogProps.imageUrl = response.imageUrl;
      response.tags.forEach((element: any) => {
        this.blogProps.tags.push(element);
      });
      this.blogProps.createdAt = response.createdAt;
      this.blogProps.author = response.author;
    });
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
    let imageLink: string;
    if (this.selectedFile){
      const imageData = await this.imageService.upload_image(this.selectedFile).toPromise() as ImgurImage;
      imageLink = imageData.data.link;
    }else{
      imageLink = this.blogProps.imageUrl;
    }

    const blog = {
      id: this.blogProps.id,
      title: this.blogProps.title,
      content: this.blogProps.content,
      imageUrl: imageLink,
      tags: [],
      createdAt: this.blogProps.createdAt,
      author: this.blogProps.author
    };
    this.blogProps.tags.forEach((element: any) => {
      blog.tags.push(element);
    });

    this.blogService.update_blog(blog, this.blogId).subscribe((response: any) => {
      this.blogId = response.blogId;
      this.showSpinner = false;
      this.open_alert_dialog(`Blog je ažužuriran!`);
    });
  }

  processFile(imageInput: any){
    this.selectedFile = imageInput.files[0];
    this.previewImageLoad();
  }

  previewImageLoad(){
    const reader = new FileReader();
    reader.onloadend = e => {
      this.blogProps.imageUrl = reader.result;
    };

    reader.readAsDataURL(this.selectedFile);
  }

  addTag(tag: Tag): void{
    this.blogProps.tags.push(tag);
  }

}
