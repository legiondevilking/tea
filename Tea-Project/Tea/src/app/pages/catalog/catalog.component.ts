import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {catalogType} from "../../types/catalog.type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }
  products: catalogType[] = [];
  ngOnInit(): void {
    this.http.get<catalogType []>('https://testologia.ru/tea')
      .subscribe((data) =>{
        this.products = data
        console.log(this.products)
      })

  }

  navigateToCatalog(id:number): void {
    this.router.navigate(['/product',id]);
  }

}
