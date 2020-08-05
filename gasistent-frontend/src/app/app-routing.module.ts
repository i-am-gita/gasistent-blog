import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminComponent } from './admin-components/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { AllBlogsComponent } from './admin-components/all-blogs/all-blogs.component';
import { AddBlogComponent } from './admin-components/add-blog/add-blog.component';
import { UpdateBlogComponent } from './admin-components/update-blog/update-blog.component';
import { LoginComponent } from './login/login.component';
import {BlogPageComponent} from "./blog-page/blog-page.component";

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'blog', component:BlogPageComponent},
  // {path:'podkast', component:PodcastComponent},
  // {path:'okce', component:OkceComponent},
  // {path:'kontakt', component:ContactComponent},
  // {path:'bio', component:BioComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'admin-components', component:AdminComponent,
    canActivate:[AuthGuardService],
    children:[
      {path:'all-blogs', component:AllBlogsComponent},
      {path:'add-blog', component:AddBlogComponent},
      {path:'update-blog/:id',component:UpdateBlogComponent}
    ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
