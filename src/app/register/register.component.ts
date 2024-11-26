import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { GovernorateService } from '../service/governorate.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  phase1: boolean = true;
  phase2: boolean = false;
  phase3: boolean = false;
  isLoading: boolean = true;
  
  GovernorateList: any[] = [];

  readonly macAddress: string = 'A4-FC-77-1A-2C-1B'; // Example MAC address
  private readonly _GovernorateService = inject(GovernorateService);
  errorMessage: string = '';
  _httpClient = inject(HttpClient);
  _AuthService = inject(AuthService);
  _Router = inject(Router);

  registerationData: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    whatsappNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    governorate: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    field: new FormControl('General'),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    ip: new FormControl(this.macAddress), // Set the MAC address as the value for 'ip'
  });

  Registeration(): void {
    if (this.registerationData.valid) {
      this._AuthService.registerForm(this.registerationData.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading=false;
          localStorage.setItem('name',response.name);
          this._Router.navigate(['/login']);
          // if (response.message === 'success') {
          //   this._Router.navigate(['/login'])
          // }
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
        },
      });
    }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._GovernorateService.getGovernorates().subscribe({
      next: (response) => {
        this.GovernorateList = response as any;
        console.log(this.GovernorateList)
      },
    });
  }
}
