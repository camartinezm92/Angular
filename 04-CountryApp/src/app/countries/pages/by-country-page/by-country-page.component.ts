import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public Country : Country[] = [];

  constructor ( private countrySevice : CountriesService) {}

  searcheByCountry( term:string):void {
    this.countrySevice.consultItem('name',term)
    .subscribe(country => this.Country = country)

  }



}
