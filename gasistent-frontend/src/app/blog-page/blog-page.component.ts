import { BlogService } from './../api-calls/blog.service';
import { Component, OnInit } from '@angular/core';

interface Blog{
  id: string,
  title:string,
  feature_image:string,
  created_at:string,
  content:string
}

@Component({
  selector: 'app-blogpage',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  public all_blogs: Blog[] = [];

  constructor(private blog_service: BlogService) { }

  ngOnInit() {
    this.load_all_blogs();
  }

  load_all_blogs(){
    this.blog_service.get_all_blogs().subscribe((response: any) =>{
      response.all_blogs.forEach((element: any) => {
        this.all_blogs.push(element);
      });
    })
  }

}
