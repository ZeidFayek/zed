import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
HttpClientModule;
Observable;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);
  baseUrl: string = 'https://zbackendapi.runasp.net/api/v1/Authentication';

  getToken(): string | null {
    return typeof window !== 'undefined'
      ? localStorage.getItem('userToken')
      : null; // Check if in the browser
  }

  registerForm(formData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/Register`, formData);
  }
  login(loginData: object): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/Login`, loginData);
  }
  logout(): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/Logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('userToken');
      })
    );
  }
}
