import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { ObjectListComponent } from './object-list/components/list/object-list.component';
import { ObjectItemComponent } from './object-list/components/item/object-item.component';
import { DerectivesComponent } from './lessons/derectives/derectives.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostListComponent } from './requests/components/post-list/post-list.component';
import { PostItemComponent } from './requests/components/post-item/post-item.component';
import { PipesComponent } from './pipes/components/pipes/pipes.component';
import { FormsComponent } from './forms/components/forms/forms.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { LayoutComponent } from './layout/layout.component';
import { isLoggedGuardFn } from './is-logged.guard';
import { AnimationsComponent } from './pages/animations/animations.component';
import { BasicRxjsComponent } from './components/basic-rxjs/basic-rxjs.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        canActivate: [isLoggedGuardFn],
      },
      {
        path: 'object-list/:id',
        component: ObjectItemComponent,
      },
      {
        path: 'derectives',
        component: DerectivesComponent,
      },
      {
        path: 'life-cycle',
        component: ParentComponent,
      },
      {
        path: 'requests',
        component: PostListComponent,
        canActivate: [isLoggedGuardFn],
      },
      {
        path: 'animations',
        component: AnimationsComponent,
        canActivate: [isLoggedGuardFn],
      },
      {
        path: 'requests/:id',
        component: PostItemComponent,
      },
      {
        path: 'requests/:id',
        component: PostItemComponent,
      },
      {
        path: 'rxjs',
        component: BasicRxjsComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'forms',
        component: FormsComponent,
      },
      {
        path: 'dynamic',
        component: DecoratorsComponent,
      },
      { path: '**', component: NotFoundPagesComponent },
    ],
  },
];
