import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  opened = true;

  public links = [
    {
      icon: 'restaurant_menu',
      label: 'lista de comida',
      routerLink: 'food/food-list',
    },
    {
      icon: 'lunch_dining',
      label: 'Crear nueva comida',
      routerLink: 'food/form',
    },
  ]

  public open(): void {
    if (this.opened) {
      this.opened = !this.opened;
    } else {
      this.opened = !this.opened;
    }
  }
}
