import { Injectable } from "@angular/core";
import { Cart } from "../models/cart";
import { Product } from "../models/product";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = [];

  addToCart(user: User, product: Product) {
    let cart = this.carts.find(cart => cart.user === user);
    if (!cart) {
      cart = new Cart(user);
      this.carts.push(cart);
    }
    cart.products.push(product);
    cart.totalAmount += product.getPrice();
  }

  removeFromCart(user: User, product: Product) {
    const cart = this.carts.find(cart => cart.user === user);
    if (cart) {
      const index = cart.products.indexOf(product);
      if (index > -1) {
        cart.products.splice(index, 1);
        cart.totalAmount -= product.getPrice();
      }
    }
  }

  checkout(user: User) {
    const index = this.carts.findIndex(cart => cart.user === user);
    if (index > -1) {
      this.carts.splice(index, 1);
    }
  }
  getCartProducts(user: User): Product[] {
    let cart = this.carts.find(cart => cart.user === user);
    return cart ? cart.products : [];
  }

  getTotalAmount(user: User): number {
    let cart = this.carts.find(cart => cart.user === user);
    return cart ? cart.totalAmount : 0;
  }
}