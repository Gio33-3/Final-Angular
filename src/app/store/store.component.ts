import { Component, OnInit } from '@angular/core';
import { AppleService } from '../services/apple.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: any[] = [];

  constructor(private service: AppleService) { }

  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data.products;
    });
  }
}