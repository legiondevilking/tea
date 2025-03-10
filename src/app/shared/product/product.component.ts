import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogType} from "../types/catalog.type";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router,private ProductService:ProductService) { }
  product!: CatalogType;
  productId!: number;
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.ProductService.getProduct(this.productId)
      .subscribe((data) =>{
        this.product = data
      })
  }
  navigateToOrder(title:string): void {
    this.router.navigate(['/order',title]);
  }

}
