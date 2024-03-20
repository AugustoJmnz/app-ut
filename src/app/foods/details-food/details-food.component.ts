import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food, FoodService } from '../shared';
import { MatCard, MatCardContent, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-details-food',
  standalone: true,
  imports: [MatCard, MatButtonModule, CurrencyPipe, TitleCasePipe, MatCardContent, MatCardTitle, MatCardSubtitle, MatIcon ] ,
  templateUrl: './details-food.component.html',
  styleUrl: './details-food.component.scss'
})
export class DetailsFoodComponent implements OnInit {

  constructor(public serviceFood: FoodService) {

  }

  activedRoute: ActivatedRoute = inject(ActivatedRoute);
  fooId: number = -1;
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    image: '',
    category: '',
    price: 0
  }

  ngOnInit(): void {
    this.fooId = Number(this.activedRoute.snapshot.params['id']);
    this.food = this.serviceFood.getOne(this.fooId);
  }

}
