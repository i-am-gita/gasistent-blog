import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../../../core/services/blog.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogBodyComponent} from '../../../../shared/components/dialog-body/dialog-body.component';
import {AlertDialogBodyComponent} from '../../../../shared/components/alert-dialog-body/alert-dialog-body.component';
import {TokenStorageService} from '../../../../core/services/token-storage.service';
import {Router} from '@angular/router';


interface Blog{
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  tags: Tag[];
  createdAt: string;
  author: Author;
}

interface Tag{
  id: string;
  name: string;
}

interface Author{
  username: string;
  skillTitle: string;
  profileImage: string;
}

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  public blogs: Array<Blog> = [];
  public deletedBlogId: string;
  public  showSpinner = false;

  constructor(private tokenStorageService: TokenStorageService,
              private blogService: BlogService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {
    this.load_admin_blogs();
  }

  load_admin_blogs(){
    this.blogService.get_admin_blogs(this.tokenStorageService.getUser().username).subscribe((response: any) => {

      if (response !== null) {
        response.forEach((element: any) => {
          const html = element.content;
          const div = document.createElement('div');
          div.innerHTML = html;
          const text = div.textContent || div.innerText || '';
          element.content = text;
          this.blogs.push(element);
        });
      }else{
        console.log('Nisi objavio nijedan post!');
      }
    });
  }

  open_dialog(message: string, blogId: string): void{
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      data: {
        message
      },
      width: '550px',
      height: '200px'
    });

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm){
        this.delete_single_blog(blogId);
      }
    });
  }

  open_alert_dialog(message: string){
    const dialogRef = this.dialog.open(AlertDialogBodyComponent, {
      width: '550px',
      height: '200px',
      data: {
        message
      }
    });
  }

  delete_single_blog(blogId: string){
    this.showSpinner = true;
    this.blogService.delete_blog(blogId).subscribe((response) => {
      if (response){
        this.showSpinner = false;
        this.open_alert_dialog('Ode post!');
        window.location.reload();
      }
    });
  }
}
