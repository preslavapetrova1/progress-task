import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsiteContentComponent} from "./components/website-content/website-content.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
