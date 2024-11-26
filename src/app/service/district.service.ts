import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/District';

  getDistricts() {
    return this._HttpClient.get(`${this.baseUrl}/GetDistricts`)
  }
}
