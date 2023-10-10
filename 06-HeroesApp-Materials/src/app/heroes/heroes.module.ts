import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  declarations: [
    HeroesPagesComponent,
    LayoutPagesComponent,
    ListPageComponent,
    NewPagesComponent,
    SearchPageComponent,
    CardComponent,

    // pipes
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class HeroesModule { }
