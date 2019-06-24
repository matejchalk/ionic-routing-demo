import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  cards = [];

  onChange(): void {
    this.cards = Array(Math.round(Math.random() * 10)).fill(null);
  }
}
