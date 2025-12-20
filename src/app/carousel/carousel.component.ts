import { Component, ViewEncapsulation } from '@angular/core';

// Importa Swiper Core e i moduli necessari
import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper';

// Installa i moduli che hai usato nell'HTML
SwiperCore.use([Keyboard, Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
