import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TenderDetailsComponent } from './tender-details/tender-details.component';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { TechniciansCardComponent } from "./technicians-card/technicians-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    TenderDetailsComponent,
    NgIf,
    HttpClientModule,
    ProductDetailsComponent,
    TechniciansCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'zed';
  isLogin: boolean = false;
}
