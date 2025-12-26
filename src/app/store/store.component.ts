import { Component, OnInit } from '@angular/core';
import { AppleService } from '../services/apple.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  iphones: any[] = [];
  samsungs: any[] = [];

  constructor(private service: AppleService) { }

  ngOnInit() {
    this.service.getIphones().subscribe((data) => {
      this.iphones = data.products;
    });


    this.service.getSamsungs().subscribe((data) => {
      this.samsungs = data.products;
    });
  }
}