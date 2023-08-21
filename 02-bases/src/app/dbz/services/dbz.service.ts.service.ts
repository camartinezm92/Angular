import { Injectable } from '@angular/core';
import { characters } from '../interfaces/characters.interface';
import { v4 as Newid} from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Character : characters[] =[{
    id : Newid(),
    name : 'krillin',
    power: 1000
  },{
    id : Newid(),
    name: 'Goku',
    power: 9500
  },{
    id : Newid(),
    name: 'Vegueta',
    power: 7500
  }
]

  onNewCharacter2(character:characters):void{

    const newCharacter:characters = {id : Newid(), ... character}
    this.Character.push(newCharacter);
  };

  onDeleterItemIndex(id:string){
    this.Character = this.Character.filter(character => character.id !== id );
  }

}
