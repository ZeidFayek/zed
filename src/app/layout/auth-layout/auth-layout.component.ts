import { Component } from '@angular/core';
import { AuthNavbarComponent } from "../../auth-navbar/auth-navbar.component";
import { AppComponent } from "../../app.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthNavbarComponent, AppComponent,RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
