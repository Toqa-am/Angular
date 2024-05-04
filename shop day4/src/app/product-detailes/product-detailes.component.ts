import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../assets/products-list.json'
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent {
  products:any=data;
  oneProduct:any;
  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    // console.log(this.products);
    // console.log(this.activatedRoute.snapshot.params['id']);
    
    
    this.oneProduct=this.products.find((product:any)=> product.id === Number(this.activatedRoute.snapshot.params['id']))
    console.log(this.oneProduct);
    
  }

}
