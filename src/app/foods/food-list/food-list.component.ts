import {Component, OnInit} from '@angular/core';
import {Food, FoodService} from '../shared';
import {FoodComponent} from '../food/food.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent implements OnInit {
  data: Food[] = [];

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.data = this.foodService.getAllFood();
  }
}
