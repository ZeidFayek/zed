import {
  Component,
  inject,
  ElementRef,
  ViewChild,
  HostListener,
} from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';
import { RouterLink } from '@angular/router';
import { CraftsmanService } from '../service/craftsman.service';
@Component({
  selector: 'app-technicians',
  standalone: true,
  imports: [MainheaderComponent, RouterLink],
  templateUrl: './technicians.component.html',
  styleUrl: './technicians.component.scss',
})
export class TechniciansComponent {
  profileImageSrc: string = '../../assets/camera_1.jpg'; // Default image
  private readonly _CraftsmanService = inject(CraftsmanService);
  AllCraftsman: any[] = [];
  x: boolean = true;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._CraftsmanService.GetAllCraftsman().subscribe({
      next: (response) => {
        this.AllCraftsman = response;
        console.log(response);
      },
    });
  }
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
