
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'


  constructor(private httpClient: HttpClient) { }

  searchByCapital ( term: string ): Observable <Country[]> {
    const urlCapital: string = `${this.apiUrl}/capital/${term}`
    return this.httpClient.get<Country[]>( urlCapital )
    .pipe(
      catchError ( () => of([])
      ))
  }

  searcheByCountry ( term: string) : Observable<Country[]>{
    const urlCountry : string = `${this.apiUrl}/name/${term}`
    return this.httpClient.get<Country[]>( urlCountry )
    .pipe(
      catchError( () => of([])
      ))
  }

  searchByRegion (term : string) : Observable<Country[]>{
    const urlRegion : string = `${this.apiUrl}/region/${term}`
    return this.httpClient.get <Country[]> ( urlRegion )
    .pipe(
      catchError( () => of([]))
    )
  }

}
