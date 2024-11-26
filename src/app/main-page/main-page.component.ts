import { Component } from '@angular/core';
import { MainheaderComponent } from "../mainheader/mainheader.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainheaderComponent,RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
