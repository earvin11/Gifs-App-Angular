
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar:</h5>
        <input type="text"
            class="form-control mb-3"
            placeholder="Buscar Gifs..."
            (keyup.enter)="searchTag()"
            #txtTagInput>
    `
})

export class SearchBoxComponent {

    // hace referencia a un elemento del html, 'txtTagInput' es la ref# del elemento en el html
    // con este view child podemos acceder al value del elemento entre otras cosas
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>

    constructor(
        private gifsService: GifsService
    ) { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        this.gifsService.searchTag(newTag);

        this.tagInput.nativeElement.value = '';
    }

}