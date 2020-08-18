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

  timePassedSinceCreation(createdDate: Date){
    const now = new Date();
    const elapsed = now.getTime() - createdDate.getTime();
    let seconds = elapsed / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let months = days / 30;
    let years = months / 12;

    seconds = Math.round(seconds);
    minutes = Math.round(minutes);
    hours = Math.round(hours);
    days = Math.round(days);
    months = Math.round(months);
    years = Math.round(years);
    let ago;

    if (years === 0){
      if (months === 0){
        if (days === 0){
          if (hours === 0){
            if (minutes === 0){
              ago = (seconds === 1) ? ' second ago' : ' seconds ago';
              return seconds + ago;
            }else {
              ago = (minutes === 1) ? ' minute ago' : ' minutes ago';
              return minutes + ago;
            }
          }else {
            ago = (hours === 1) ? ' hour ago' : ' hours ago';
            return hours + ago;
          }
        }else {
          ago = (days === 1) ? ' day ago' : ' days ago';
          return days + ago;
        }
      } else{
        ago = (months === 1) ? ' month ago' : ' months ago';
        return months + ago;
      }
    }else {
      ago = (years === 1) ? ' year ago' : ' years ago';
      return years + ago;
    }
  }


}
