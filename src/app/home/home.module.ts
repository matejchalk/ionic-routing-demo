import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RelativeRouterLinkDirectiveModule } from '../relative-router-link.module';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'search', loadChildren: '../search/search.module#SearchPageModule' },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    RelativeRouterLinkDirectiveModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
