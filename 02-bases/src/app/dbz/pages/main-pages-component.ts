import { Component, } from '@angular/core';
import { characters } from '../interfaces/characters.interface';


@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html'
})

export class PagesDBZComponent {


  public Character : characters[] =[{

    name : 'krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegueta',
    power: 7500
  }
]
}
