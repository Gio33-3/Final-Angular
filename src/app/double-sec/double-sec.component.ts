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

  constructor() { }

  ngOnInit(): void {
  }

}
