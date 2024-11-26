import { Component } from '@angular/core';
import { MainheaderComponent } from "../mainheader/mainheader.component";

@Component({
  selector: 'app-tender-details',
  standalone: true,
  imports: [MainheaderComponent],
  templateUrl: './tender-details.component.html',
  styleUrl: './tender-details.component.scss'
})
export class TenderDetailsComponent {

}
