import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform( hero: Hero ): string {
    if (!hero.id && !hero.alt_img){
      return 'assets/no-image.png';
    }

    if(hero.alt_img){return hero.alt_img} // si la imgen existe y no esta en el assest se envia por esta ruta

    return `assets/heroes/${hero.id}.jpg`

  }

}
