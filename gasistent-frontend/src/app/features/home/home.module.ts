import { NgModule } from '@angular/core';
import {MaterialModule} from '../../shared/material.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponentComponent} from './home-component/home-component.component';

@NgModule({
  declarations: [
    HomeComponentComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
  ]
})
export class HomeModule { }
