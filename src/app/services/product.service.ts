import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "./IProduct";

const HOLIDAY_TREATS_URL = 'assets/holiday_treats.json';
const CUPCAKES_URL = 'assets/cupcakes.json';
const CAKES_URL = 'assets/cakes.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private holidayTreats: Array<IProduct>;
  private cupcakes: Array<IProduct>;
  private cakes: Array<IProduct>;
  currentProductList: Array<IProduct>;

  constructor(private http: HttpClient) {
    this.getHolidayTreats();
    this.getCupcakes();
    this.getCakes();
  }

  private getHolidayTreats(){
    this.http.get(HOLIDAY_TREATS_URL).subscribe((holidayTreats: Array<IProduct>)=>{
        this.holidayTreats = holidayTreats;
        this.currentProductList = this.holidayTreats;
    })
  }

  private getCupcakes(){
    this.http.get(CUPCAKES_URL).subscribe((cupcakes: Array<IProduct>)=>{
      this.cupcakes = cupcakes;
    })
  }

  private getCakes(){
    this.http.get(CAKES_URL).subscribe((cakes: Array<IProduct>)=>{
      this.cakes = cakes;
    })
  }

  setHolidayTreats(){
    this.currentProductList = this.holidayTreats;
  }

  setCupcakes(){
    this.currentProductList = this.cupcakes;
  }

  setCakes(){
    this.currentProductList = this.cakes;
  }
}
