import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
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
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Blog;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadPostDetails();
  }

  loadPostDetails() {
      this.blogService.get_single_blog(this.route.snapshot.params.id).subscribe((response: any) => {
          response.createdAt = this.blogService.timePassedSinceCreation(new Date(response.createdAt));
          this.post = response;
      });
  }

}
