import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isSameBrand(arg0: Product[]) {
    throw new Error('Method not implemented.');
  }
toShow: Product[] = []
myService !: ProductsService
  @Input() set typeToShow(type:string){
    if(type=="all")
      this.toShow = this.myService.getProducts();
    else
      this.toShow = this.myService.getProductsByBrand(type);
  }
//רושמים בבנאי קריאה למערך מוצרים בפרודקט סרוויס
  constructor(private service : ProductsService, private router:Router,private cartService: CartService, private usersService: UsersService) {
    this.myService = service
  }
  // פונקציה שמבצעת המעבר לקומפוננטת ProductDetails
  goToDetails(product: Product) {
    this.router.navigate(['/product-details', { title: product.getTitle() }]);
  }
  ngOnInit(): void {
    this.toShow = this.service.getProducts()
  }
  addToCart(product: Product) {
    let user = this.usersService.getCurrentUser();
    if (user) {
      this.cartService.addToCart(user, product);
    }
  }
}