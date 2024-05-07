import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart =new BehaviorSubject <Number> (0)
  private prods=new BehaviorSubject<any> ([])

  constructor() { }

  getCart()
  {
    return this.cart.asObservable();
  }

  updateCart(newCart:number){
    this.cart.next(newCart);
  }

  getProds()
  {
    return this.prods.asObservable();
  }

  updateProds(newProds:number){
    this.prods.next(newProds);
  }
}
