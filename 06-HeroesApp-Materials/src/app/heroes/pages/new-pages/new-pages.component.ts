import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent {

  public formHero = new FormGroup({
    id:                 new FormControl<string>(''),
    superhero:          new FormControl<string>(''),
    publisher:          new FormControl<Publisher>( Publisher.DCComics),
    alter_ego:          new FormControl<string>(''),
    first_appearance:   new FormControl<string>(''),
    characters:         new FormControl<string>(''),
    alt_img:            new FormControl<string>(''),
  })

  public publishers =[
    { id:'DC Comics' , value: 'DC - Comics' },
    { id:'Marvel Comics' , value: 'Marvel - Comics' }
  ]

  constructor (private heroSerevice : HeroesService ){}

  onSubmit():void{

    if(this.formHero.invalid) return;

    //this.heroSerevice.updateHero(this.formHero.value)

  }

}
