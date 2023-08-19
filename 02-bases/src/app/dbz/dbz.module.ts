import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { PagesDBZComponent } from './pages/main-pages-component';



@NgModule({
  declarations: [
    PagesDBZComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    PagesDBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class DBZModule { }
