
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private httpClient: HttpClient) { }

  consultItem(link: string , term:string): Observable <Country[]> {
    const url : string = `${this.apiUrl}/${link}/${term}`
    return this.httpClient.get<Country[]>( url )
    .pipe(
      catchError ( () => of([])
      ))
  }

  // searchByCapital ( term: string ): Observable <Country[]> {
  //   return this.consultItem('capital',term)
  // }

  // searcheByCountry ( term: string) : Observable<Country[]>{
  //   return this.consultItem('name',term)
  // }

  // searchByRegion (term : string) : Observable<Country[]>{
  //   return this.consultItem('region',term)
  // }

}
