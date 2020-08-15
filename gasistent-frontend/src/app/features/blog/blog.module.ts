import { NgModule } from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {PostContainerComponent} from './post-container/post-container.component';
import {RouterModule} from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostContainerComponent,
    PostDetailsComponent,
    BlogPageComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
  ]
})
export class BlogModule { }
