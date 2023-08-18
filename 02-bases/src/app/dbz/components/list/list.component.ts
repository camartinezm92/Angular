import { Component, Input } from '@angular/core';
import { characters } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: characters[] =[{
    name: 'Trunks',
    power: 10
  }]
}
