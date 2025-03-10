import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {CatalogType} from "../../shared/types/catalog.type";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: CatalogType[] = [];

  constructor(private http: HttpClient,private router:Router, private CatalogService:ProductService) { }
  ngOnInit(): void {
    this.CatalogService.getProducts()
      .subscribe((data) =>{
        this.products = data
        console.log(this.products)
      })

  }

  navigateToCatalog(id:number): void {
    this.router.navigate(['/product',id]);
  }

}
