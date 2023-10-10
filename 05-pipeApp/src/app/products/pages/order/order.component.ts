import { Component } from '@angular/core';
import { Color, hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = true;
  public orderBy?: keyof hero;

  public Heroes : hero [] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Derdevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Robin",
      canFly: false,
      color: Color.green
    },
    {
      name: "spiderman",
      canFly: false,
      color: Color.red
    },
    {
      name: "GreenLigth",
      canFly: true,
      color: Color.green
    },

  ]
  
  toggleisUppercase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value:keyof hero):void{
    this.orderBy = value;
  }

}
