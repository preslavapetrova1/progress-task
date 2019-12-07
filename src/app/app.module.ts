import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {WebsiteContentComponent} from './components/website-content/website-content.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsiteContentComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
