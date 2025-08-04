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
      title: "Trump diz que os EUA concluíram acordo 'gigantesco' com o Japão",
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
    {
      title: 'Lançamento de novo smartphone revoluciona mercado tecnológico',
      data: '00/00/0000',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    },
    {
      title: 'Evento esportivo internacional atrai milhões de espectadores',
      data: '00/00/0000',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    },
    {
      title: 'Descoberta científica pode mudar o futuro da medicina',
      data: '00/00/0000',
      image:
        'https://www.univates.br/blog//wp-content/uploads/2023/03/pexels-pixabay-40568.jpg',
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
