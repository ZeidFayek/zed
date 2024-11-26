import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from './../service/auth.service';
import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMessage: string = '';
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  readonly macAddress: string = 'A4-FC-77-1A-2C-1B'; // Example MAC address
  isLoading: boolean = false;

  loginData: FormGroup = new FormGroup({
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    password: new FormControl(null, [Validators.required]),
    ip: new FormControl(this.macAddress), // Set the MAC address as the value for 'ip'
  });

  login() {
    console.log(this.loginData.value);
    if (this.loginData.valid) {
      this._AuthService.login(this.loginData.value).subscribe({
        next: (response) => {
          alert('Login Success');
          console.log(response);
          localStorage.setItem('userToken', (response as any).token);
          this.isLoading = true;
          this._Router.navigate(['/mainPage']);
        },
        error: (err) => {
          console.log('err', err);
          this.errorMessage = err.error.message;
        },
      });
    }
  }
}
