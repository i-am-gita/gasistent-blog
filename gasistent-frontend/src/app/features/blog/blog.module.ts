import { NgModule } from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {CommonModule} from '@angular/common';
import {PostItemComponent} from './post-item/post-item.component';
import {RouterModule} from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
  declarations: [
    PostItemComponent,
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
