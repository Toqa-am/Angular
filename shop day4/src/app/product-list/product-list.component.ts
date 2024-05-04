import { Component } from '@angular/core';
import data from '../../assets/products-list.json'
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any=data;
  constructor(){
    console.log(this.products)
  }

}
