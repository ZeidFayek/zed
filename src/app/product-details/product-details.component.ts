import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  phase_1: boolean = true;
  phase_2: boolean = false;
  
}
