import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { OrderComponent } from './pages/order/order.component';
import { HeaderComponent } from './components/header/header.component';
import {ProductComponent} from "./pages/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { CutTextsPipe } from './pipes/cut-texts.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { PhonePipe } from './pipes/phone.pipe';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    OrderComponent,
    HeaderComponent,
    ProductComponent,
    CutTextsPipe,
    PhonePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
