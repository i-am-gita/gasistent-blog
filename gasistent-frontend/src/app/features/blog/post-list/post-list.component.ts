import {Component, Input, OnInit} from '@angular/core';

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
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() data;
  post: Blog;

  constructor() { }

  ngOnInit(): void {
    this.loadPostData();
  }

  loadPostData(){
    this.post = this.data;
  }

}
