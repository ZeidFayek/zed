import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  inject,
} from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';
import { SubBiddingService } from '../service/sub-bidding.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-subcontracting',
  standalone: true,
  imports: [MainheaderComponent, ReactiveFormsModule],
  templateUrl: './subcontracting.component.html',
  styleUrls: ['./subcontracting.component.scss'],
})
export class SubcontractingComponent {
  private readonly _SubBiddingService = inject(SubBiddingService);
  subBiddingData: any[] = [];
  
  @ViewChild('lightboxContainer')
  lightboxContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('lightboxItem') lightboxItem!: ElementRef<HTMLDivElement>;

  // Function to close the lightbox
  closeSlider() {
    this.lightboxContainer.nativeElement.classList.replace('d-flex', 'd-none');
  }
  showLightbox() {
    this.lightboxContainer.nativeElement.classList.replace('d-none', 'd-flex');
  }
  // HostListener to listen for keydown events (e.g., Escape key)
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeSlider();
    }
  }
  //////////////////////////////////////////

  subBiddingDataInputs: FormGroup = new FormGroup({
    companyName: new FormControl(null),
    description: new FormControl(null),
    address: new FormControl(null),
    major: new FormControl(null),
    price: new FormControl(null),
    quantity: new FormControl(null),
    startWorkingDate: new FormControl(null),
  });
  ngOnInit(): void {
    this._SubBiddingService.getSubBidding().subscribe({
      next: (response) => {
        console.log(response);
        this.subBiddingData = response as any;
        console.log(this.subBiddingData);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addFavourite(id: any) {
    this._SubBiddingService.addFavouriteSubBidding(id).subscribe({
      next: (response) => {
        alert('Added');
      },
    });
  }
}
