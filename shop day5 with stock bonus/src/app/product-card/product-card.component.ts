import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { DiscountPipe } from '../pipes/discount.pipe';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product:any={};
  cart:any;
  prods:any=[];

  
  constructor( private router: Router,private cartSer: CartService, private prodsSer: CartService){ 
    

  }

  ngOnInit(){
    this.cartSer.getCart().subscribe((cart:any)=>this.cart=cart)
    this.prodsSer.getProds().subscribe((prod:any)=>this.prods=prod)

  }

  showDetails(id:any){
    this.router.navigate(['product',id])
    // id.preventDefault()
  }
  addToCart(product:any){
    if(this.prods.filter((prod:any)=>prod.id===product.id).length===0){
      if(product.stock>0){
      this.cartSer.updateCart(this.cart+1)
      product.quant=1
      this.prods.push(product)
      this.prodsSer.updateProds(this.prods)
      // this.prods.filter((prod:any)=>prod.id===product.id).quant=1

      this.prods.filter((prod:any)=>prod.id===product.id)[0].stock--}


    }
    else{
      if(product.stock>0){
      console.log(this.prods.filter((prod:any)=>prod.id===product.id))
      this.prods.filter((prod:any)=>prod.id===product.id)[0].quant++
      this.prods.filter((prod:any)=>prod.id===product.id)[0].stock--
      }

  }
    
  }

}
