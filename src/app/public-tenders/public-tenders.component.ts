import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  inject,
} from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BiddingService } from '../service/bidding.service';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { GovernorateService } from '../service/governorate.service';

@Component({
  selector: 'app-public-tenders',
  standalone: true,
  imports: [MainheaderComponent, RouterLink, RouterOutlet,ReactiveFormsModule],
  templateUrl: './public-tenders.component.html',
  styleUrl: './public-tenders.component.scss',
})
export class PublicTendersComponent {
  private readonly _BiddingService = inject(BiddingService);
  private readonly _GovernorateService = inject(GovernorateService);

  BiddingData: any[] = [];
  selectedItems: any | null = null;
  x: boolean = true;
  GovernorateList: any[] = [];

  BiddingDataInputs: FormGroup = new FormGroup({
    name: new FormControl(null),
    description: new FormControl(null),
    address: new FormControl(null),
    governorate: new FormControl(null),
    category: new FormControl(null),
    termsNotebookPrice: new FormControl(null),
    initialInsurancePrice: new FormControl(null),
    expirationDate: new FormControl(null),
    openDate: new FormControl(null),
    proposalDate: new FormControl(null),
  });

  ngOnInit(): void {
    this._BiddingService.getBidding().subscribe({
      next: (response) => {
        this.BiddingData = response;
        console.log(this.BiddingData);
      },
      error: (err) => {
        console.log('Error = ', err);
      },
    });
    this._GovernorateService.getGovernorates().subscribe({
      next: (response) => {
        console.log(response);
        this.GovernorateList = response as any;
      },
    });
  }
  toggleFavourite(item: any): void {
    item.isFavourite = !item.isFavourite; // Toggle the class

    if (item.isFavourite) {
      this.addFavourite({ biddingId: item.id });
    } else if (!item.isFavourite) {
      this.deleteFevourite({ biddingId: item.id });
    }
  }

  addFavourite(id: any) {
    this._BiddingService.addFavouriteBidding(id).subscribe({
      next: (response) => {
        alert('تم إضافته الي القائمة المفضلة بنجاح');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteFevourite(id: any) {
    console.log('delete = ', id);
    this._BiddingService.deleteFavouriteBidding(id).subscribe({
      next: (response) => {
        alert('Deleted');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  showMoreDetails(id: number) {
    console.log(id);
    const selectedItem = this.BiddingData.find((item) => item.id === id);
    this.selectedItems = selectedItem;
    console.log(this.selectedItems);
    this.x = false;
  }
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
}
