import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  inject,
} from '@angular/core';import { NewspaperService } from '../service/newspaper.service';

@Component({
  selector: 'app-weeklynewspapers',
  standalone: true,
  imports: [],
  templateUrl: './weeklynewspapers.component.html',
  styleUrl: './weeklynewspapers.component.scss',
})
export class WeeklynewspapersComponent {
  private readonly _NewspaperService = inject(NewspaperService);
  Newspaper: any[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._NewspaperService.GetAllNews().subscribe({
      next: (response) => {
        this.Newspaper = response;
      },
    });
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
  /////////////////////////////////////////////////////////////////////////////////

  profileImageSrc: string = '../../assets/images.png'; // Default image

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

}
