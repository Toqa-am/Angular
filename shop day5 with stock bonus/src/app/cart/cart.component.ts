import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  prods:any=[]
  constructor(private prodsSer: CartService){}

  ngOnInit(){
    this.prodsSer.getProds().subscribe((prod:any)=>
    this.prods=prod);
    // this.prods.forEach((prod:any)=> { prod.quant=1
      
    // });
    
  }

  decQuant(id:any){
    if(this.prods.find((prod:any)=>prod.id===id).quant>1  ){
      this.prods.find((prod:any)=>prod.id===id).quant--
      this.prods.find((prod:any)=>prod.id===id).stock++

    }
    else{
      this.prods=this.prods.filter((prod:any)=>prod.id!==id)
      this.prods.find((prod:any)=>prod.id===id).stock++

    }

  }
  incQuant(id:any){
    if(this.prods.find((prod:any)=>prod.id===id).stock>0  ){
        this.prods.find((prod:any)=>prod.id===id).quant++
        this.prods.find((prod:any)=>prod.id===id).stock--

    }
    
  }

}
