import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { CategoryEnum } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 2,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 3,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 4,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 5,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
    {
      id: 6,
      name: 'pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 234,
    },
  ];

  constructor() {
  }

  public getAllFood(): Food[] {
    return this.menu;
  }
  //Obtener comida del arreglo
public getOne(id:number):Food | undefined {
  return this.menu.find(item => item.id);
}

  //Añadir comida
  public addFood(food: Food) {
    this.menu.push(food);
  }
  //Actualizar comida
  public updateFood(newFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == newFood.id) {
        this.menu [index] = newFood
      }
    })
  }
  //Eliminar comida
  public deleteFood(deleteFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == deleteFood.id) {
        this.menu.splice(index, 1);
      }
    })
  }
}
