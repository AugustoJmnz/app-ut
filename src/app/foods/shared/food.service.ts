import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  API_URL: string = '';

  constructor(private http: HttpClient) {
    this.API_URL = `${environment.API_URL}`;
  }

  public getAll():Observable<Food[]> {
    return this.http.get<Food[]>(this.API_URL+'food/all');
  }

  public addFood(food: Food):Observable<Food> {
    return this.http.post<Food>(this.API_URL+'food/save', food)
  }

  public deleteFood(deleteFood: Food):Observable<unknown> {
    return this.http.delete(this.API_URL+'food/delete/'+deleteFood.id);
  }

  public getOne(id: number):Observable<Food> {
    return this.http.get<Food>(this.API_URL+'food/find/'+id);
  }
}
