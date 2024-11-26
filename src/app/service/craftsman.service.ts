import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Craftsman';

  GetAllCraftsman(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/GetAllCraftsman`);
  }
}
