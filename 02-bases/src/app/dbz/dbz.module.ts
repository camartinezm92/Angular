import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesDBZComponent } from './pages/main-pages-component';



@NgModule({
  declarations: [
    PagesDBZComponent
  ],
  exports:[
    PagesDBZComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DBZModule { }
