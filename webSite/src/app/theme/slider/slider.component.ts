import { Component,ViewEncapsulation,AfterViewInit,ViewChild } from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements AfterViewInit {


 @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  example1SwipeOptions: any;

  constructor() {
    this.example1SwipeOptions = {
        paginationClickable: true
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }
}
