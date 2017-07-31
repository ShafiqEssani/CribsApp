import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  
  constructor() { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    console.log(data);
  }

}
