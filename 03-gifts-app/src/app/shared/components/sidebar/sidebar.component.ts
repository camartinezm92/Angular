import { Component } from '@angular/core';
import { GifsService } from './../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifstService: GifsService ){}

  get tags() : string[]{
    return this.gifstService.TagsHistory;
  }

  lastSerach(tagLast:string):void{
    this.gifstService.searchTag(tagLast);
  }
}
