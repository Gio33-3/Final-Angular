import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { CarouselComponent } from './carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { IntroStoreComponent } from './intro-store/intro-store.component';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstSectionComponent,
    SecSectionComponent,
    TherdSectionComponent,
    DoubleSecComponent,
    CarouselComponent,
    PreFooterComponent,
    FooterComponent,
    StoreComponent,
    HomeComponent,
    IntroStoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    SwiperModule,
    MatCardModule,
    CarouselModule,
    //serve per comunicare con le chiavi API
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
