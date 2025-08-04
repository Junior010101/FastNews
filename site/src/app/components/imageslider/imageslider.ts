import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imageslider.html',
  styleUrls: ['./imageslider.scss'],
})
export class Imageslider {
  slides = [
    {
      title: 'Algo',
      data: '00/00/0000',
      image:
        'https://www.pontotel.com.br/local/wp-content/uploads/2022/05/imagem-corporativa.webp',
    },
    {
      title: 'Outra coisa',
      data: '00/00/0000',
      image:
        'https://wallpapers.com/images/hd/nature-pictures-ffm1xnpcdzxox0y7.jpg',
    },

    // adiciona outros slides aqui
  ];

  currentSlideIndex = 0;

  get currentSlide() {
    return this.slides[this.currentSlideIndex];
  }

  setSlide(index: number) {
    this.currentSlideIndex = index;
  }
}
