import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AuthGuardService} from './core/auth/auth.guard.service';
import {LoginComponent} from './features/admin/login/login.component';
import {PanelBlogComponent} from './features/admin/panel-blog/panel-blog.component';


const routes: Routes = [
  // {path: '', component:HomepageComponent},
  // {path: 'blog', component:BlogPageComponent},
  // {path:'podkast', component:PodcastComponent},
  // {path:'okce', component:OkceComponent},
  // {path:'kontakt', component:ContactComponent},
  // {path:'bio', component:BioComponent},
  // {path: 'blog/:id', component:BlogDetailsComponent},
  {path: 'admin', component: PanelBlogComponent,
    canActivate: [AuthGuardService],
    children: [
      // {path: 'blogovi', component:AllBlogsComponent},
      // {path: 'novi-blog', component:AddBlogComponent},
      // {path: 'izmeni-blog/:id', component:UpdateBlogComponent}
    ]
  },
  {path: 'prijava', component: LoginComponent}
];

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
