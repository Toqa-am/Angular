import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../assets/products-list.json'
import { DiscountPipe } from '../pipes/discount.pipe';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.css'
})
export class ProductDetailesComponent {
  // products:any=data;
  oneProduct:any;
  product: any;

 
  constructor(private activatedRoute: ActivatedRoute,private productsReq: RequestsService){

  }

  ngOnInit(){
    // console.log(this.products);
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.productsReq.getOneProduct(Number(this.activatedRoute.snapshot.params['id'])).subscribe((data) => {
      this.product = data;
      

    }
  );
    
    // this.oneProduct=this.product.find((product:any)=> product.id === Number(this.activatedRoute.snapshot.params['id']))
    // console.log(this.oneProduct);
    
  }

}
