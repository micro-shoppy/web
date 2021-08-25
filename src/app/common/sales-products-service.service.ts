import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs";
import {map, share} from "rxjs/operators";
import {SalesProduct} from "./entities/sales-product";

@Injectable({
  providedIn: 'root'
})
export class SalesProductsServiceService {

  constructor(private http: HttpClient, private env: AppConfigService) { }

  public getAllSalesProducts(): Observable<SalesProduct[]> {
    return this.http.get(this.env.catalogResourcesUrl)
      .pipe(
        map(response => Object.assign([], response)),
        map(response => response.map(data => Object.assign(new SalesProduct(), data))),
        share());
  }
}
