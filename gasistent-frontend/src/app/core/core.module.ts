import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';

import { RouterModule } from '@angular/router';


import { MaterialModule } from '../shared/material.module';

import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@auth0/angular-jwt';

import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,

    RouterModule,
    HttpClientModule,

    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('auth_token');
        },
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/login']
      }
    })
  ],
  providers: [
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidebarComponent
  ]
})
export class CoreModule { }
