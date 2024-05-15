import { Product } from "./product";
import { User } from "./user";

export class Cart {
    user: User;
    products: Product[];
    totalAmount: number;
  
    constructor(user: User) {
      this.user = user;
      this.products = [];
      this.totalAmount = 0;
    }
  }