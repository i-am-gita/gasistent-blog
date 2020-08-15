import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = 'a8e32ead557441e';

  constructor(private http: HttpClient) { }

   upload_image(imageFile: File){
    const formData = new FormData();
    formData.append('image', imageFile);

    const httpOptions = {
       headers: new HttpHeaders({
         Authorization: `Client-ID ${this.clientId}`
       }),
     };
    return this.http.post(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }
}
