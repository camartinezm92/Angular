import { Component, EventEmitter, Output } from '@angular/core';
import { characters } from './../../interfaces/characters.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<characters> = new EventEmitter();

  public Character: characters ={
    name:'',
    power: 0
  }


  emitCharacter() : void  {
    console.log(this.Character)
    if (this.Character.name.length === 0) return;

    this.onNewCharacter.emit(this.Character); // forma de enviar un evento o emit!!!

    this.Character = { name:'', power: 0};

  }
}
