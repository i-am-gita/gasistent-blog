import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeSr from '@angular/common/locales/sr-Latn';
registerLocaleData(localeSr);

import {MaterialModule} from '../../shared/material.module';
import {ToolbarBlogComponent} from './panel-blog/toolbar-blog/toolbar-blog.component';
import {LoginComponent} from './login/login.component';
import {PanelBlogComponent} from './panel-blog/panel-blog.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AddBlogComponent } from './panel-blog/add-blog/add-blog.component';
import { CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { AdminBlogsComponent } from './panel-blog/admin-blogs/admin-blogs.component';
import { UpdateBlogComponent } from './panel-blog/update-blog/update-blog.component';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ToolbarBlogComponent,
    LoginComponent,
    PanelBlogComponent,
    AddBlogComponent,
    AdminBlogsComponent,
    UpdateBlogComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    CKEditorModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'sr-Latn'}
  ],
  exports: [
  ]
})
export class AdminModule { }
