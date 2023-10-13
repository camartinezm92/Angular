import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit, OnDestroy {

  public heroes: Hero[] = []

  private $suscribeHero! : Subscription;

  constructor ( private heroesService: HeroesService ) {}

  ngOnInit(): void {
    this.$suscribeHero = this.heroesService.getHeroes()
    .subscribe(Heroes => this.heroes = Heroes)
  }

  ngOnDestroy(): void {
    this.$suscribeHero.unsubscribe();
  }


}
