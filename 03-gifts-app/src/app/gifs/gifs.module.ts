import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardGifsComponent } from './components/card-gifs/card-gifs.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home-pages/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardGifsComponent,
    GifsCardComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent,
    
  ]
})
export class GifsModule { }
