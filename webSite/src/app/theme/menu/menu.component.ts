import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})

export class MenuComponent {
  active=false;
  menu(){
    this.active=!this.active;
  }
}
