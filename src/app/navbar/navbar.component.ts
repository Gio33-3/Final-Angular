import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeSection: | 'store' | 'mac' | 'ipad' | 'iphone' | 'watch' | 'airpods' | 'tv&casa' | 'intrattenimento' | 'accessori' | 'supporto' | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
