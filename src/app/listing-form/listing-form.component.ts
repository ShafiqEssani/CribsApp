import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  
  constructor(public cribsService: CribsService) { }

  ngOnInit() {
  }
  
  // Single Addition of a Crib
  onCribSubmit(data): void {
    //console.log(data);
    this.cribsService.addCrib(data);
    this.newCribForm.reset();
  }

  
}
