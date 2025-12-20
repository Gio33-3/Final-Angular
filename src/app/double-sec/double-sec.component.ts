import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-sec',
  templateUrl: './double-sec.component.html',
  styleUrls: ['./double-sec.component.scss']
})
export class DoubleSecComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() subtitle2?: string = '';
  @Input() imgSrc: string = '';
  @Input() lookIconApple: boolean = false;
  //style binding per l'allineamento del testo
  @Input() allign: string = 'start'; // Può essere 'start', 'center' o 'end'
  @Input() link: string = '';
  @Input() link2?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
