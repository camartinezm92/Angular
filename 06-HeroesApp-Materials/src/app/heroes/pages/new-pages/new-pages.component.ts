import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


import { switchMap } from 'rxjs';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ComfirmDaialogComponent } from '../../components/comfirm-daialog/comfirm-daialog.component';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent  implements OnInit{

  public formHero = new FormGroup({
    id:                 new FormControl<string>(''),
    superhero:          new FormControl<string>('', {nonNullable: true}),
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
                private activeRoute:  ActivatedRoute,
                private router :     Router,
                private snackBarr :   MatSnackBar,
                private dialog : MatDialog,
                ){}

  get currentHero () : Hero {
    const hero = this.formHero.value as Hero;
    return hero;
  }

  ngOnInit(): void {

    if(!this.router.url.includes('edit')) return;

    this.activeRoute.params
    .pipe(
      switchMap ( ({ id }) => this.heroSerevice.getHeroById(id)),
    )
    .subscribe( hero => {

      if(!hero){
        return this.router.navigateByUrl('/');
      };

      this.formHero.reset(hero);
      return;
    });

  }


  onSubmit():void{

    if(this.formHero.invalid) return;

    if(this.currentHero.id){
      this.heroSerevice.updateHero(this.currentHero)
      .subscribe( hero =>{
        this.router.navigate(['/heroes/list'])
        this.showSnackBar(`${hero.superhero}, ha sido actulizado!`)
      })
      return;
    }

    this.heroSerevice.addHero(this.currentHero)
    .subscribe(hero=>{
      this.router.navigate([ '/heroes/edit', hero.id ])
      this.showSnackBar(`${ hero.superhero}, ha sido creado exitosamente.`);
    })
    };

    onDeleteHero ():void{

      if(!this.currentHero.id) throw Error (' ID hero is required');

      const dailogRef = this.dialog.open(ComfirmDaialogComponent,{
        data: this.formHero.value
      });

      dailogRef.afterClosed().subscribe (result => {
        console.log('The Dialog was Closed');
        console.log({result});
      });
    };


    showSnackBar (message: string):void{
      this.snackBarr.open(message, 'Done' , {
        duration: 2500,
      });
    };
  };


