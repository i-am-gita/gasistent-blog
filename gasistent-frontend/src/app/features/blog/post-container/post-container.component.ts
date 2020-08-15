import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {
  postList = [];
  loading = true;


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadPostList();
  }

  loadPostList(): void {
    this.blogService.get_all_blogs().subscribe((response: any) => {
      response.forEach((element: any) => {
        const html = element.content;
        const div = document.createElement('div');
        div.innerHTML = html;
        element.content = div.textContent || div.innerText || '';
        this.postList.push(element);
      });
    });
    this.loading = false;
  }

}
