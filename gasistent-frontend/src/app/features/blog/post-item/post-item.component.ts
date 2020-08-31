import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../../../core/services/blog.service';

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
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() data;
  post: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadPostData();
  }

  loadPostData(){
    this.post = this.data;
    console.log(this.post.author.profileImage);
    this.post.createdAt = this.blogService.timePassedSinceCreation(new Date(this.post.createdAt));
  }

}
