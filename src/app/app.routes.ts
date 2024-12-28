import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { ObjectListComponent } from './object-list/components/list/object-list.component';
import { ObjectItemComponent } from './object-list/components/item/object-item.component';
import { DerectivesComponent } from './lessons/derectives/derectives.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: 'object-list',
    component: ObjectListComponent,
  },
  {
    path: 'object-list/:id',
    component: ObjectItemComponent,
  },
  {
    path: 'derectives',
    component: DerectivesComponent,
  },
  { path: '**', component: NotFoundPagesComponent },
];
