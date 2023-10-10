import { Component } from '@angular/core';

@Component({
  selector: 'app-new-pages',
  templateUrl: './new-pages.component.html',
  styles: [
  ]
})
export class NewPagesComponent {

  public publishers =[
    { id:'DC Comics' , value: 'DC - Comics' },
    { id:'Marvel Comics' , value: 'Marvel - Comics' }
  ]

}
