import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Food, FoodService } from '../shared';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    TitleCasePipe,
    RouterModule
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food?: Food;

  constructor(public foodService: FoodService) {

  }

  public deleteFood(food: Food) {
    this.foodService.deleteFood(food);
  }
}
