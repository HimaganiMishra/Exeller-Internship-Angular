import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  
  items: ProductDetails[] = [];

  addToCart(product:ProductDetails ) {
    this.items.push(product);
  }

  getAllProducts():ProductDetails[]
  {
    return this.items;
  }
}