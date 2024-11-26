import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _HttpClient = inject(HttpClient);
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Product';

  constructor() {}

  createProduct() {}

  getAllProduct(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/GetProducts`);
  }
  addFavouriteProduct(id: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/AddFavouriteProduct`, id);
  }
}
