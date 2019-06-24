import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage {
  readonly cards = Array(10).fill(null);
}
