import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes:Hero[] = [];
  public selecterHero?:Hero;

  constructor( private heroServices : HeroesService){}

  searchHero(){
    const value: string = this.searchInput.value || '';

    this.heroServices.getSuggestions(value)
    .subscribe(hero => this.heroes = hero);
  }

  onSelectedOption(event:MatAutocompleteSelectedEvent):void{
    if(!event.option.value){
      this.selecterHero = undefined;
      return
    }

    const hero = event.option.value;
    this.searchInput.setValue(  hero.superhero)
    
    this.selecterHero = hero;
  }
}
