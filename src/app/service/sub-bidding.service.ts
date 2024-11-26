import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubBiddingService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}

  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/SubBidding';

  createSubBidding(subbiddingData: object) {
    return this._HttpClient.post(
      `${this.baseUrl}/CreateSubBidding`,
      subbiddingData
    );
  }
  getSubBidding() {
    return this._HttpClient.get(`${this.baseUrl}/GetSubBidding`);
  }
  getFavouriteSubBidding() {
    return this._HttpClient.get(`${this.baseUrl}/GetFavouriteSubBiddings`);
  }
  addFavouriteSubBidding(favouriteDataBidding: object) {
    return this._HttpClient.post(
      `${this.baseUrl}/AddFavouriteSubBidding`,
      favouriteDataBidding
    );
  }
  deleteFavouriteSubBidding() {
    return this._HttpClient.delete(`${this.baseUrl}/DeleteFavouriteSubBidding`);
  }
}
