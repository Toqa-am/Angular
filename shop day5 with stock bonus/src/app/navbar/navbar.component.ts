import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cart:any=0
  constructor(private cartSer : CartService){}
  ngOnInit(){
    this.cartSer.getCart().subscribe((data:any)=>this.cart=data)
  }

}
