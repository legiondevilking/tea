import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catalogType} from "../../types/catalog.type";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }
  product!: catalogType;
  productId!: number;
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<catalogType>('https://testologia.ru/tea?id='+this.productId)
      .subscribe((data) =>{
        this.product = data
      })
  }
  navigateToOrder(id:number): void {
    this.router.navigate(['/order',id]);
  }

}
