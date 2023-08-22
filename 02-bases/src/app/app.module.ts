import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';

import { DBZModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DBZModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
