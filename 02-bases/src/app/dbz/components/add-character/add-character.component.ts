import { Component } from '@angular/core';
import { characters } from './../../interfaces/characters.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  public Character: characters ={
    name:'',
    power: 0
  }


  emitCharacter() : void  {
    console.log(this.Character)


    this.Character.name ='';
    this.Character.power =0;

  }
}
