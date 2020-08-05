import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin-components/admin.component';
import { AddBlogComponent } from './admin-components/add-blog/add-blog.component';
import { AllBlogsComponent } from './admin-components/all-blogs/all-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagComponent } from './material-components/tag/tag.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { AlertDialogBodyComponent } from './alert-dialog-body/alert-dialog-body.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBlogComponent } from './admin-components/update-blog/update-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { FooterComponent } from './footer/footer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddBlogComponent,
    AllBlogsComponent,
    UpdateBlogComponent,
    LoginComponent,
    HomepageComponent,
    BlogDetailsComponent,
    AlertDialogBodyComponent,
    DialogBodyComponent,
    TagComponent,
    TopNavbarComponent,
    BlogPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    YouTubePlayerModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('auth_token');
        },
        allowedDomains:['localhost:8080'],
        disallowedRoutes:['http://localhost:8080/login']
      }
    })
  ],
  providers: [],
  entryComponents:[DialogBodyComponent,AlertDialogBodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
