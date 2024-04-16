import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Food, FoodService } from '../shared';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(public foodService: FoodService, public dialog: MatDialog) {

  }

  public openDialog(food: Food): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: food,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteFood(food)
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  public deleteFood(food: Food) {
    this.foodService.deleteFood(food).subscribe({
      next: () => console.log('Se esta eliminando'),
      error: (e) => console.error(e),
      complete: () => console.info('Complete'),
    })
  }
}