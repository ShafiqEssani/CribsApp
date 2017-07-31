import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { CardComponent } from './card/card.component';

import { CribsService } from './services/cribs.service';
import { ListingFormComponent } from './listing-form/listing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CardComponent,
    ListingFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
