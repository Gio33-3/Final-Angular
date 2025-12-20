import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-sec',
  templateUrl: './double-sec.component.html',
  styleUrls: ['./double-sec.component.scss']
})
export class DoubleSecComponent implements OnInit {

  @Input() titolo: string = '';
  @Input() sottotitolo: string = '';
  @Input() sottotitolo2?: string = '';
  @Input() immagineSrc: string = '';
  @Input() mostraIconaApple: boolean = false;
  //style binding per l'allineamento del testo
  @Input() allineamento: string = 'start'; // Può essere 'start', 'center' o 'end'
  @Input() link: string = '';
  @Input() link2?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
