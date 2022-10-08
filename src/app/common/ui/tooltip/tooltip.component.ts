import {Component, OnInit} from '@angular/core';
import {TooltipPosition, TooltipTheme} from "./tooltip.enums";

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip: string = '';
  left: number = 0;
  top: number = 0;
  visible: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
