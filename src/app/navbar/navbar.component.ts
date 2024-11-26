import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);

  logout() {
    this._AuthService.logout().subscribe({
      next: (response) => {
        console.log('res = ', response);
        this._Router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
