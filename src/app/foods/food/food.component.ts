import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Food} from '../shared';
import {CurrencyPipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    TitleCasePipe,
  ],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food?: Food;
}
