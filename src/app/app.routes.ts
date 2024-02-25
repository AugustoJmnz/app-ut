import {Routes} from '@angular/router';
import {FoodsComponent} from './foods/foods.component';

export const routes: Routes = [
  {
    path: '',
    component: FoodsComponent,
  },
  {
    path: 'food',
    loadChildren: () => import('./foods/foods.routes'),
  }
];
