import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal'
import { MEALS } from '../mock-meals'
import { HeapProfiler } from 'inspector';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

meals = MEALS;

// this happens when a meal item is clicked
selectedMeal: Meal;
onSelect(meal: Meal): void {
  this.selectedMeal = meal;
}

  constructor() { }

  // This is a lifecycle hook: Put nitialization logic here. It is called shorly after creating the component.
  ngOnInit() {
  }

}


