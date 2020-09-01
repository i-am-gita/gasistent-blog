import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AuthGuardService} from './core/auth/auth.guard.service';
import {LoginComponent} from './features/admin/login/login.component';
import {PanelBlogComponent} from './features/admin/panel-blog/panel-blog.component';
import {AdminBlogsComponent} from './features/admin/panel-blog/admin-blogs/admin-blogs.component';
import {AddBlogComponent} from './features/admin/panel-blog/add-blog/add-blog.component';
import {UpdateBlogComponent} from './features/admin/panel-blog/update-blog/update-blog.component';
import {PostDetailsComponent} from './features/blog/post-details/post-details.component';
import {BlogPageComponent} from './features/blog/blog-page/blog-page.component';
import {HomeComponentComponent} from './features/home/home-component/home-component.component';


const routes: Routes = [
   {path: '', component: HomeComponentComponent},
   {path: 'blog', component: BlogPageComponent},
  // {path:'podkast', component:PodcastComponent},
  // {path:'okce', component:OkceComponent},
  // {path:'kontakt', component:ContactComponent},
  // {path:'bio', component:BioComponent},
  {path: 'blog/:id', component: PostDetailsComponent},
  {path: 'prijava', component: LoginComponent},
  {path: 'admin', component: PanelBlogComponent,
    canActivate: [AuthGuardService],
    children: [
       {path: 'blogovi', component: AdminBlogsComponent},
       {path: 'novi-blog', component: AddBlogComponent},
       {path: 'izmeni-blog/:id', component: UpdateBlogComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
