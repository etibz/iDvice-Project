import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];

  constructor(private cartService: CartService, private usersService: UsersService) { }

  ngOnInit(): void {
    let user = this.usersService.getCurrentUser();
    if (user) {
      this.cartProducts = this.cartService.getCartProducts(user);
    }
  }
  
  removeFromCart(product: Product) {
    let user = this.usersService.getCurrentUser();
    if (user) {
      this.cartService.removeFromCart(user, product);
      this.cartProducts = this.cartService.getCartProducts(user);
    }
  }
  
  getTotalAmount(): number {
    let user = this.usersService.getCurrentUser();
    if (user) {
      return this.cartService.getTotalAmount(user);
    }
    return 0;
  }
  
  checkout() {
    let user = this.usersService.getCurrentUser();
    if (user) {
      this.cartService.checkout(user);
      this.cartProducts = [];
    }
  }
  
}
