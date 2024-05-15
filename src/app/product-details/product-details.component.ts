import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title: string = "";
  processor: string = "";
  picture: string = "";
  ram : number | undefined;
  storage : string = "";
  screen : string = "";
  features : string = "";
  height : number | undefined;
  width : number | undefined;
  depth : number | undefined;
  battery : number | undefined;
  warranty : number | undefined;
  product: Product | undefined;
  myService !: ProductsService;



  constructor(private actRoute: ActivatedRoute, service : ProductsService) {
    this.myService = service
}
  ngOnInit(): void {
    this.title = this.actRoute.snapshot.params["title"];
    const product = this.myService.getProductByTitle(this.title);
    if (product) {
      this.picture = product.getPicture();
      this.processor = product.getProcessor();
      this.ram = product.getRam();
      this.storage = product.getStorage();
      this.screen = product.getScreen();
      this.features = product.getFeatures();
      this.height = product.getHeight();
      this.width = product.getWidth();
      this.depth = product.getDepth();
      this.battery = product.getBattery();
      this.warranty = product.getWarranty();
    }
  }
}
