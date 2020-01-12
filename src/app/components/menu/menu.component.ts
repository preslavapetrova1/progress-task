import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-website-content',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class WebsiteContentComponent implements OnInit {

  public

  constructor(public ps: ProductService) {
  }

  ngOnInit() {
  }


}
