import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private add_blog_url: string = 'mongo add blog endpoint';
  private get_all_blogs_url: string = 'mongo get blogs endpoint';
  private delete_blog_url: string = ' mongo delete blog endpoint';
  private get_single_blog_url: string = 'mongo get single blog endpoint';
  private update_blog_url: string = 'mongo update blog endpoint';

  constructor(private http:HttpClient) { }

  add_blog(blog_props: Object){
    return this.http.post(this.add_blog_url, blog_props);
  }

  get_all_blogs(){
    return this.http.get(this.get_all_blogs_url);
  }

  delete_blog(id: string){
    return this.http.delete(this.delete_blog_url + id);
  }

  get_single_blog(blog_id: string){
    return this.http.get(this.get_single_blog_url + blog_id);
  }

  update_blog(blog_props: Object, blog_id: string){
    return this.http.put(this.update_blog_url + blog_id, blog_props);
  }


}
