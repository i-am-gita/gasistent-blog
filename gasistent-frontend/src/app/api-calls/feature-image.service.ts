import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeatureImageService {

  private imgur_url: string = 'https://api.imgur.com/3/image';
  private client_id:string = 'a8e32ead557441e';

  constructor(private http:HttpClient) { }

  upload_image(image_file: File){
    let formData = new FormData();
    formData.append('image', image_file, image_file.name);

    let headers = new HttpHeaders({
      "authorization": 'Client-ID ' + this.client_id
    });

    return this.http.post(this.imgur_url, formData, {headers: headers});
  }
}
