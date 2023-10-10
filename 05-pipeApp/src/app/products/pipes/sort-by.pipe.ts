import { Pipe, PipeTransform } from '@angular/core';
import { hero } from '../interfaces/hero.interfaces';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: hero[], sortBy?: keyof hero | ''): hero[] {
    
    switch (sortBy){

      case'name':
      return heroes.sort((a,b) => (a.name > b.name) ? 1 : -1 );
      case'canFly':
      return heroes.sort((a,b) => (a.canFly > b.canFly) ? 1 : -1 );
      case'color':
      return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1 );
      default:
        return heroes;
    }
  }

}
