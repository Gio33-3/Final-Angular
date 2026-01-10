import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper';

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
