import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPage } from './news.page';
import { RelativeRouterLinkDirectiveModule } from '../relative-router-link.module';

const routes: Routes = [
  { path: '', component: NewsPage },
  {
    path: 'search',
    loadChildren: '../search/search.module#SearchPageModule',
  },
  {
    path: 'article/:id',
    loadChildren: '../article/article.module#ArticlePageModule',
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RelativeRouterLinkDirectiveModule,
  ],
  declarations: [NewsPage],
})
export class NewsPageModule {}
