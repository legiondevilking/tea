import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatalogType} from "../types/catalog.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(): Observable<CatalogType[]>{
    return this.http.get<CatalogType[]>('https://testologia.ru/tea', {})
  }
  getProduct(id: number): Observable<CatalogType>{
    return this.http.get<CatalogType>(`https://testologia.ru/tea?id=${id}`);
  }


  createOrder(data:{name: string, last_name: string, phone: string, country: string, zip: string, product: string, address: string, comment: string | undefined | null}){
    return this.http.post<{ success: boolean,}>(`https://testologia.ru/order-tea`, data)

  }
}
