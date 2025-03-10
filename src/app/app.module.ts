import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './feature/main/main.component';
import { CatalogComponent } from './feature/catalog/catalog.component';
import { OrderComponent } from './feature/order/order.component';
import {HeaderComponent} from "./shared/header/header.component";
import {ProductComponent} from "./shared/product/product.component";
import {HttpClientModule} from "@angular/common/http";
import { CutTextsPipe } from './shared/pipes/cut-texts.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { PhonePipe } from './shared/pipes/phone.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import {NgbAccordionModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';


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
    ReactiveFormsModule,
    NgbModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
