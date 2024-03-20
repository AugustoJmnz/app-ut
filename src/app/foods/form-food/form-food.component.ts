import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Food, FoodService } from '../shared';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})
export class FormFoodComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(2)]],
  });
  constructor(private formBuilder: FormBuilder, public serviceFood: FoodService, public router: Router) { }

  fooId: number = -1;
  edit: boolean = false;
  activedRoute: ActivatedRoute = inject(ActivatedRoute);
  food?: Food = {
    id: 0,
    name: '',
    description: '',
    image: '',
    category: '',
    price: 0
  }

  ngOnInit(): void {
    if (this.activedRoute.snapshot.params['id']) {
      this.edit = true;
      this.fooId = Number(this.activedRoute.snapshot.params['id']);
      console.log(this.fooId);
      this.food = this.serviceFood.getOne(this.fooId);
      if (this.food) {
        this.form.patchValue({
          name: this.food.name,
          description: this.food.description,
          image: this.food.image,
          category: this.food.category,
          price: this.food.price.toString()
        })
      }
    }
  }


  public updateData() {
    if (this.form.status == 'VALID') {

      if (
        this.name?.value &&
        this.description?.value &&
        this.category?.value &&
        this.image?.value &&
        this.price?.value
      ) {
        let priceNumber = Number(this.price.value)
        let comida: Food = {
          id: this.fooId,
          name: this.name?.value,
          description: this.description?.value,
          category: this.category?.value,
          image: this.image?.value,
          price: priceNumber
        };
        console.log(comida);
        this.serviceFood.updateFood(comida);
        //this.router.navigate(['/food/food-list']);
      }
    }
  }

  public sendData() {
    if (this.form.status == 'VALID') {

      if (
        this.name?.value &&
        this.description?.value &&
        this.category?.value &&
        this.image?.value &&
        this.price?.value
      ) {
        let priceNumber = Number(this.price.value)
        let comida: Food = {
          id: 0,
          name: this.name?.value,
          description: this.description?.value,
          category: this.category?.value,
          image: this.image?.value,
          price: priceNumber
        };
        console.log(comida);
        this.serviceFood.addFood(comida);
        this.router.navigate(['/food/food-list']);
      }
    }
  }


  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  } get image() {
    return this.form.get('image');
  } get category() {
    return this.form.get('category');
  } get price() {
    return this.form.get('price');
  }
}
