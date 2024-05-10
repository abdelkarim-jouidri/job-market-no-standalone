import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-skills',
  templateUrl: './select-skills.component.html',
  styleUrl: './select-skills.component.css'
})
export class SelectSkillsComponent implements OnInit{
  ngOnInit(): void {
    this.toppings.valueChanges.subscribe(val=>console.log(val))
  }
  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  
}
