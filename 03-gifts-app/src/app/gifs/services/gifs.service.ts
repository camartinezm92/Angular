import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifsList: Gif[]=[];

  private _tagHistory:string[]= [];
  private apiKey:string = 'f6ilBtiWa11Vv98QSib9m4VluPzWJSGW';
  private serviceUrl:string ='http://api.giphy.com/v1/gifs'

  constructor( private http:HttpClient ) {
    this.loadLocalSotage()
  }

  get TagsHistory(){
    return [...this._tagHistory];
  }
  
  private organiceHistory(tag:string){

    tag = tag.toLowerCase();
    
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter( (oldTag) =>  oldTag !== tag);
    }
    
    this._tagHistory.unshift( tag );
    this._tagHistory = this._tagHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem('History', JSON.stringify(this._tagHistory))
  };

  private loadLocalSotage():void{
    if (!localStorage.getItem('History'))return;
    this._tagHistory = JSON.parse(localStorage.getItem('History')!)

    if(this._tagHistory.length === 0 ) return;
    this.searchTag(this._tagHistory[0])

  }

  searchTag(tag:string):void{
    if(tag.length ===0)return;
    this.organiceHistory(tag);

    // fetch('http://api.giphy.com/v1/gifs/search?api_key=f6ilBtiWa11Vv98QSib9m4VluPzWJSGW&q=valorant&limit=10')
      // .then(resp => resp.json())
      // .then(data => console.log(data))
      
    // const resp = await fetch('http://api.giphy.com/v1/gifs/search?api_key=f6ilBtiWa11Vv98QSib9m4VluPzWJSGW&q=valorant&limit=10');
    // const data = await resp.json();
    // console.log(data);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 12)
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp =>{
    
      this.gifsList = resp.data;
    });

  }
  
  }

