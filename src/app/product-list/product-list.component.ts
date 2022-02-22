import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { product, productFromList } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = productFromList;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  addToCart(product: product) {
    this.cartService.addToCart(product);
    window.alert('Product added to cart!');
  }
  onnotify(){
    window.alert('Notify me')
  }


  ngOnInit() {
  }

}