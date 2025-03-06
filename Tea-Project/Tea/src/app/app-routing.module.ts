import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ProductComponent} from "./pages/product/product.component";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
  {path: '', component: MainComponent, title:'Главная страница'},
  {path: 'catalog', component: CatalogComponent, title:'Каталог'},
  {path: 'product/:id', component: ProductComponent, title:'Чай'},
  {path: 'order/:id', component: OrderComponent, title:'Оформление заказа'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
