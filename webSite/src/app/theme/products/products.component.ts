import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {

  products = ["ahmet","mehmet","mustafa","sadi"]

  constructor() { }


  ngOnInit() {
  }

}
