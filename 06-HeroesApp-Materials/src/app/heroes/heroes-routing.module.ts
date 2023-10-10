import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesPagesComponent } from './pages/heroes-pages/heroes-pages.component';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPagesComponent } from './pages/new-pages/new-pages.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPagesComponent,
    children: [
      { path:'new-heroe', component: NewPagesComponent },
      { path:'search', component: SearchPageComponent  },
      { path:'list', component: ListPageComponent },
      { path:'edit/:id', component: NewPagesComponent },
      { path:':id', component: HeroesPagesComponent },
      // cuando se coloca el id solo este se debe dejar de ultimas pues esete puede concider con cualquier indomacion que ingrese pues lo tomara como un valor id
      { path:'**', redirectTo: 'list' }, // lo corre en la carga inicial

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
