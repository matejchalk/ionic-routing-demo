import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { RelativeRouterLinkDirectiveModule } from '../relative-router-link.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
  },
  {
    path: 'article/:id',
    loadChildren: '../article/article.module#ArticlePageModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RelativeRouterLinkDirectiveModule,
  ],
  declarations: [SearchPage],
})
export class SearchPageModule {}
