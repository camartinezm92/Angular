import { Component, } from '@angular/core';
import { DbzService } from '../services/dbz.service.ts.service';
import { characters } from '../interfaces/characters.interface';


@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main-pages.component.html'
})

export class PagesDBZComponent {

  constructor(private DbzService2: DbzService){}

  get Character():characters[] {
    return [...this.DbzService2.Character];
  }

  onDeleteCharacterById(id:string):void{
    this.DbzService2.onDeleterItemIndex(id);
  }

  addNewCharacter(Character:characters):void{
    this.DbzService2.onNewCharacter2(Character);
  }
};
