import { Component, Input, EventEmitter, Output } from '@angular/core';
import { characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: characters[] =[{
    name: '',
    power: 0
  }]

  @Output()
  public onDelete = new EventEmitter<string>
  //public onDelete:EventEmitter<number> = new EventEmitter

  onDeleteCharacter(id?:string):void{
    if (!id) return;

    console.log({id})
    this.onDelete.emit(id);
}
}
