import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { switchMap } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent  implements OnInit{

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

  constructor (private heroSerevice : HeroesService,
                private activeRoute: ActivatedRoute,
                private roueter : Router){}

  get currentHero () : Hero {
    const hero = this.formHero.value as Hero;
    return hero;
  }

  ngOnInit(): void {

    if( !this.roueter.url.includes('edit')) return;

    this.activeRoute.params
    .pipe(
      switchMap ( ({id}) => this.heroSerevice.getHeroById(id)),
    )
    .subscribe( hero => {

      if(!hero) return this.roueter.navigateByUrl('/');

      this.formHero.reset(hero);
      return;
    });

  }


  onSubmit():void{

    if(this.formHero.invalid) return;

    if(this.currentHero.id){
      this.heroSerevice.updateHero(this.currentHero)
      .subscribe( hero =>{
        //TODO: mostrar snackbar
      })
      return;
    }

    this.heroSerevice.addHero(this.currentHero)
    .subscribe(hero=>{
      //TODO: mostar snackbar y redireccionar a /heroes/edit/hero.id
    })

    }

  }


