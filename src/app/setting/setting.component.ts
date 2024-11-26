import { Component } from '@angular/core';
import { MainheaderComponent } from "../mainheader/mainheader.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [MainheaderComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

}
