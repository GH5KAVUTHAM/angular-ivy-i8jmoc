import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    
  })
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
ngOnInit(): void {
throw new Error('Method not implemented.');
}
 onSubmit(): void {
   alert('submitted')
   this.items = this.cartService.clearCart();
   console.log('ORDER SUBMITTED');
   this.checkoutForm.reset();
 }
}
