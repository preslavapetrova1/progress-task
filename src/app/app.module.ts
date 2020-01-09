import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {WebsiteContentComponent} from './components/website-content/website-content.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ProductPageComponent } from './components/product-page/product-page.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebsiteContentComponent,
    ProductsComponent,
    MenuItemComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [
    ProductService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
