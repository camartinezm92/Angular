import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public nameHeroes : string[] = ['Ironman','Spiderman', 'Hulk', 'She Hulk', 'Thor', 'Hawkeye', 'Black Widow']
}
