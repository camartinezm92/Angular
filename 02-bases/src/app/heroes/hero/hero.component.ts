import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name : string = "ironman";
    public age  : number = 45;

    get CapitalizaerName(){
      return this.name.toUpperCase();
    }

    getHeroDescription(): string{
      return `${this.name } - ${this.age}`;
    }


    changeName():void{
      //TODO
      this.name = "Spiderman";
    }

    changeAge():void{
      this.age = 23;
      // throw 'Metodo no implementado'
    }

    reset():void{
      this.name = "ironman";
      this.age  = 45;
    }
}
