import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BiddingService {
  private readonly _HttpClient = inject(HttpClient);
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Bidding';

  constructor() {}

  createBidding(biddingData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/CreateBidding`, biddingData);
  }

  getBidding(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/GetBiddings`);
  }

  getFavouriteBidding(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/GetFavouriteBiddings`);
  }
  addFavouriteBidding(id: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/AddFavouriteBidding`, id);
  }
  deleteFavouriteBidding(id: any): Observable<any> {
    return this._HttpClient.delete(
      `${this.baseUrl}/DeleteFavouriteBidding`,
      id
    );
  }
}
