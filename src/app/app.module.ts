import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecSectionComponent } from './sec-section/sec-section.component';
import { TherdSectionComponent } from './therd-section/therd-section.component';
import { DoubleSecComponent } from './double-sec/double-sec.component';
import { PreCarouselComponent } from './pre-carousel/pre-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstSectionComponent,
    SecSectionComponent,
    TherdSectionComponent,
    DoubleSecComponent,
    PreCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
