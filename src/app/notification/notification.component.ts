import { Component } from '@angular/core';
import { MainheaderComponent } from "../mainheader/mainheader.component";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MainheaderComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

}
