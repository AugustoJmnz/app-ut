import {Route} from '@angular/router';
import {FoodListComponent} from './food-list/food-list.component';
import { FormFoodComponent } from './form-food/form-food.component';

export default [
  {
    path: "food-list",
    component: FoodListComponent
  },
  {
    path:"form",
    component: FormFoodComponent
  }
] satisfies Route[];
