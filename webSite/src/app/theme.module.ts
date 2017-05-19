import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { MenuComponent } from './theme/menu/menu.component';

import {KSSwiperModule} from 'angular2-swiper';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import { SliderComponent } from './theme/slider/slider.component';
import { ProductsComponent } from './theme/products/products.component';

@NgModule({
  declarations: [
    MenuComponent,
    SliderComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    KSSwiperModule 
  ],
  providers: [],
  bootstrap: [
    MenuComponent,
    SliderComponent,
    ProductsComponent
  ]
})
export class AppModule { }
