import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-pouting.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';



@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
