import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    HeroesPagesComponent,
    LayoutPagesComponent,
    ListPageComponent,
    NewPagesComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
