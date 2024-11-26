import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GovernorateService {
  _HttpClient = inject(HttpClient);

  getGovernorates() {
    return this._HttpClient.get(
      'https://zbackendapi.runasp.net/api/v1/Governorate/GetGovernorates'
    );
  }
  getGovernorateDistricts() {
    return this._HttpClient.get(
      'https://zbackendapi.runasp.net/api/v1/Governorate/GetGovernorateDistricts'
    );
  }
}
