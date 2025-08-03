import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imagespreview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imagespreview.html',
  styleUrls: ['./imagespreview.scss']
})
export class Imagespreview {
  @Input() slides: any[] = [];
  @Input() currentSlideIndex: number = 0;
  @Input() setSlide!: (index: number) => void;
}
