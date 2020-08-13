import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private addBlogUrl = 'http://localhost:8080/api/blog';
  private getAllBlogsUrl = 'http://localhost:8080/api/blogs';
  private deleteBlogUrl = ' http://localhost:8080/api/blog/';
  private getSingleBlogUrl = 'http://localhost:8080/api/blog/';
  private updateBlogUrl = 'http://localhost:8080/api/blog/';
  private getAdminBlogs = 'http://localhost:8080/api/blogs/';

  constructor(private http: HttpClient) { }

  add_blog(blogProps: object){
    return this.http.post(this.addBlogUrl, blogProps);
  }

  get_all_blogs(){
    return this.http.get(this.getAllBlogsUrl);
  }

  delete_blog(id: string){
    return this.http.delete(this.deleteBlogUrl + id);
  }

  get_single_blog(blogId: string){
    return this.http.get(this.getSingleBlogUrl + blogId);
  }

  update_blog(blogProps: object, blogId: string){
    return this.http.put(this.updateBlogUrl + blogId, blogProps);
  }

  get_admin_blogs(username: string){
    return this.http.get(this.getAdminBlogs + username);
  }


}
