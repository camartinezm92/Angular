import { Component } from '@angular/core';
import { IMenuItems } from '../../interfaces/menuItems';

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  public reactiveMenu :  IMenuItems[] = [
    { title: 'Basicos', router: './reactive/basic'},
    { title: 'Dinamicos', router: './reactive/dynamic'},
    { title: 'Switches', router: './reactive/switches'},
  ];

  public authMenu: IMenuItems[] =[
    { title: 'Registro' , router: './auth'}
  ]

}
