import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public capitals : Country[] = [];

  constructor ( private conutriesService : CountriesService ) {}

  searchByCapital (term : string):void{
    this.conutriesService.consultItem('capital',term)
    .subscribe( (countries: Country[]) =>{
      this.capitals = countries }  )
  }
}
