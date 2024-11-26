import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/User';

  getUsers() {
    return this._HttpClient.get(`${this.baseUrl}/GetUsers`);
  }
  blockUser(data: object) {
    return this._HttpClient.post(`${this.baseUrl}/BlockUser`, data);
  }
}
