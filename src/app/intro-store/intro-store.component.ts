import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-store',
  templateUrl: './intro-store.component.html',
  styleUrls: ['./intro-store.component.scss']
})
export class IntroStoreComponent implements OnInit {

  cards = [
    { title: 'Mac', img: '../assets/img-store/1.png' },
    { title: 'iPhone', img: '../assets/img-store/2.png' },
    { title: 'iPad', img: '../assets/img-store/3.png' },
    { title: 'Apple Watch', img: '../assets/img-store/4.png' },
    { title: 'AirPods', img: '../assets/img-store/5.png' },
    { title: 'AirTag', img: '../assets/img-store/6.png' },
    { title: 'Apple TV 4K', img: '../assets/img-store/7.png' },
    { title: 'HomePod', img: '../assets/img-store/8.png' },
    { title: 'Accessori', img: '../assets/img-store/9.png' },
    { title: 'Apple Gift', img: '../assets/img-store/10.png' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
