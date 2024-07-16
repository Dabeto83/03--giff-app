import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sitebar',
  templateUrl: './sitebar.component.html',
  styleUrl: './sitebar.component.css'
})
export class SitebarComponent {
  constructor(private gifsService: GifsService) {
  }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.gifsService.searchTag(tag);
    console.log(this.gifsService.gifList);
  }
}
