import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./feature/main/main.component";
import {CatalogComponent} from "./feature/catalog/catalog.component";
import {ProductComponent} from "./shared/product/product.component";
import {OrderComponent} from "./feature/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent, title:'Главная страница'},
  {path: 'catalog', component: CatalogComponent, title:'Каталог'},
  {path: 'product/:id', component: ProductComponent, title:'Чай'},
  {path: 'order/:product', component: OrderComponent, title:'Оформление заказа'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
