import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroes-pages',
  templateUrl: './heroes-pages.component.html',
  styles: [
  ]
})
export class HeroesPagesComponent implements OnInit {

  public hero?:Hero;

  constructor (
    private heroeService: HeroesService,
    private activatedRouter : ActivatedRoute,
    private router : Router
    ){}

ngOnInit(): void {
  this.activatedRouter.params
  .pipe(
    delay(3000),
    switchMap( ({id}) => this.heroeService.getHeroById(id)),
    )
    .subscribe( hero =>{
      if(!hero) return this.router.navigate(['/heroes/list'])

      this.hero = hero;
      return;
    }
    )
}
goBack():void{
  this.router.navigateByUrl('heroes/list')
}

}