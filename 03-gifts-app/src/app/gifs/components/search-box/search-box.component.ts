import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar</h5>
    <input
    class="form-control"
    type="text"
    placeholder="Buscar Gifs....."
    #txtTagInput
    (keyup.enter)="searchTag()"
    >
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    // @ViewChildren({'txtTagInput','txtTagInput'}) funcaiona con varios 
    public tagInput!:ElementRef<HTMLInputElement>;


    constructor(private gifsService:GifsService) {}


    searchTag(){
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
    }


};
