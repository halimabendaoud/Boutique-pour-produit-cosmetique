import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  product: any;
  productId?: number;
  constructor(private route:ActivatedRoute,private productService: ProductService) { 
       route.params.subscribe(params => {
          this.productId = +params['id'];
      })
  }

  ngOnInit(): void {
   this.productService.getProduct(this.productId).subscribe((product: any) => {
    this.product = product;
   }, error => {
    console.log("Error =>", error)
   })

  }
}
