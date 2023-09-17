import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  constructor( private regionServices : CountriesService){}

  public regions : Country[] = [];

  serachByRegion (term: string):void{
    this.regionServices.consultItem('region',term)
    .subscribe(resp => this.regions = resp)
  }

}
