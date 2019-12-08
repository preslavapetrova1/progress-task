import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('hovered', [
      state('yes', style({
        transform: 'scale(1.3)'
      })),
      state('no', style({
        transform: 'scale(1)'
      })),
      transition('yes => no', [
        animate('0.1s')
      ]),
      transition('no => yes', [
        animate('0.1s')
      ]),
    ]),
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() title: string;
  @Input() imageName: string;
  @Input() isSelected: boolean;
  isHovered: boolean;

  constructor() {
    this.isHovered = false;
  }

  ngOnInit() {
  }

}
