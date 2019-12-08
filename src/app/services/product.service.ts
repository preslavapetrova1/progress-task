import {Injectable} from '@angular/core';
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
  holidayTreatsSelected: boolean;
  cupcakesSelected: boolean;
  cakesSelected: boolean;

  constructor(private http: HttpClient) {
    this.getHolidayTreats();
    this.getCupcakes();
    this.getCakes();
    this.setFalse()
  }

  private getHolidayTreats() {
    this.http.get(HOLIDAY_TREATS_URL).subscribe((holidayTreats: Array<IProduct>) => {
      this.holidayTreats = holidayTreats;
      this.setHolidayTreats();
    })
  }

  private getCupcakes() {
    this.http.get(CUPCAKES_URL).subscribe((cupcakes: Array<IProduct>) => {
      this.cupcakes = cupcakes;
    })
  }

  private getCakes() {
    this.http.get(CAKES_URL).subscribe((cakes: Array<IProduct>) => {
      this.cakes = cakes;
    });
  }

  setHolidayTreats() {
    this.setFalse();
    this.currentProductList = this.holidayTreats;
    this.holidayTreatsSelected = true;
  }

  setCupcakes() {
    this.setFalse();
    this.currentProductList = this.cupcakes;
    this.cupcakesSelected = true;
  }

  setCakes() {
    this.setFalse();
    this.currentProductList = this.cakes;
    this.cakesSelected = true;
  }

  private setFalse() {
    this.holidayTreatsSelected = false;
    this.cupcakesSelected = false;
    this.cakesSelected = false;
  }
}
