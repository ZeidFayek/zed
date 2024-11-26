import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewspaperService {
  private readonly _HttpClient = inject(HttpClient);
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Newspaper';

  GetAllNews(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/GetNewspaper`);
  }
  constructor() {}
}
