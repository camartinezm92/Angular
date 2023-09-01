import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

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




  ngOnInit(): void {
    this.activeRoute.params
    .pipe(
      switchMap( ( { id }) => this.IdService.consultItem('alpha', id))
    )
    .subscribe(country =>{
      if(!country){
        return this.router.navigateByUrl('');
      }

      console.log('Tenemos un Pais')
      return;
    });

  }



}
