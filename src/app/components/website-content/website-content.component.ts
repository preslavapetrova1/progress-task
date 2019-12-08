import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-website-content',
  templateUrl: './website-content.component.html',
  styleUrls: ['./website-content.component.scss'],
})
export class WebsiteContentComponent implements OnInit {

  constructor(private ps: ProductService) {
  }

  ngOnInit() {
  }


}
