import { ProductService } from './../service/product.service';
import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';

@Component({
  selector: 'app-project-remains',
  standalone: true,
  imports: [MainheaderComponent],
  templateUrl: './project-remains.component.html',
  styleUrl: './project-remains.component.scss',
})
export class ProjectRemainsComponent {
  private readonly _ProductService = inject(ProductService);
  projectDataRemain: any[] = [];
  toggleFavourite(iconId: any) {
    const iconElement = document.getElementById(iconId);

    if (iconElement) {
      // Toggle classes directly on the DOM element
      iconElement.classList.toggle('fa-regular');
      iconElement.classList.toggle('fa-solid');
    }

    // Call the service to add the favorite product
    this._ProductService.addFavouriteProduct(iconId).subscribe({
      next: () => alert('Added'),
      error: () => alert('Failed to add'),
    });
  }
  /////////////////////////////////////////////////////////////////////////////////

  profileImageSrc: string = '../../assets/camera_1.jpg'; // Default image

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.profileImageSrc = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
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
  ///////////////////////////////////////////////////////////////////////////

  ngOnInit(): void {
    this._ProductService.getAllProduct().subscribe({
      next: (response) => {
        this.projectDataRemain = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
