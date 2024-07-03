import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/api/products/product.service";
import {ProductRepresentation} from "../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  /*constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }
  param: any;
  queryParam: any;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['lastname'];
  }*/

  constructor(
    private service: ProductService
  ) {
  }

  ngOnInit() {
    /*this.service.getAllProductsWithLimit()
      .subscribe({
        next:(data) => {
          console.log(data);
        },
        error:err => {
          console.log(err);
        }
      });*/
    const product: ProductRepresentation = {
      title : 'test product',
      price : 13.5,
      description : 'lorem ipsum set',
      image : 'https://i.pravatar.cc',
      category : 'electronic'
    };
    this.service.createProduct(product)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error : (err : HttpErrorResponse) => {
          console.log(err);
        }
      });
  }

}
