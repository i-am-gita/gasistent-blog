import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
