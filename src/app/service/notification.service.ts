import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly _HttpClient = inject(HttpClient);
  constructor() {}
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Notification';

  getNotifications() {
    return this._HttpClient.get(`${this.baseUrl}/GetNotifications`);
  }
  updateNotifications(data: object) {
    return this._HttpClient.put(`${this.baseUrl}/UpdateStatus`, data);
  }
}
