import { Component } from '@angular/core';
// import data from '../../assets/products-list.json'
import { ProductCardComponent } from '../product-card/product-card.component';
import { CartService } from '../cart.service';
import { RequestsService } from '../requests.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;

  constructor(private productsReq: RequestsService) {}

  ngOnInit() {
    this.productsReq.getProducts().subscribe((data) => {
      this.products = data;
      this.products=this.products.products

    }
  );

  }
}
