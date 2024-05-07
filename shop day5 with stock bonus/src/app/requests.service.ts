import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://dummyjson.com/products')
  }

  getOneProduct(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
