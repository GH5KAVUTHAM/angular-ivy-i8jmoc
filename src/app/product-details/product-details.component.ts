import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{product,productFromList} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));
    this.product = productFromList.find(
     ( product) =>product.productId === productIdFromRoute
    );
  }

}