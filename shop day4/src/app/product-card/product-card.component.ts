import { Component, Input } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { DiscountPipe } from '../pipes/discount.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product:any={};
  
  constructor( private router: Router){ 
    

  }
  showDetails(id:any){
    
    this.router.navigate(['product',id])
    id.preventDefault()
  }

}
