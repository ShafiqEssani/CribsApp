import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('crib') crib: Crib;

  constructor() { }

  ngOnInit() {
    let bedroom = this.crib.bedrooms;

  }

}
