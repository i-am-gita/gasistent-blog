import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {MaterialModule} from './material.module';

import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { AlertDialogBodyComponent } from './components/alert-dialog-body/alert-dialog-body.component';


library.add(
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,

);

@NgModule({
  declarations: [
    DialogBodyComponent,
    AlertDialogBodyComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
