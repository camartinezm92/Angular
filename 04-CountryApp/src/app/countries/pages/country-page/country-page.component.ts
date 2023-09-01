import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor (
    private activeRoute : ActivatedRoute,
    private router : Router,
    private IdService : CountriesService,
    ) {}

    public infoCountry? : Country;


  ngOnInit(): void {
    this.activeRoute.params
    .pipe(
      switchMap( ( { id }) => this.IdService.consultItem('alpha', id)),
      map(countries => countries.length > 0 ? countries[0]: null)
    )
    .subscribe(country =>{      if(!country){
                                  return this.router.navigateByUrl('');
                                }
      return this.infoCountry = country
    });

  }



}
