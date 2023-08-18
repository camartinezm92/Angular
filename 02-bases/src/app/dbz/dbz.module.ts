import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesDBZComponent } from './pages/main-pages-component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



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
    CommonModule
  ]
})
export class DBZModule { }
