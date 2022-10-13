import {Component, HostListener} from '@angular/core';
import { TooltipPosition } from "./common/ui/tooltip/tooltip.enums";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tooltips-tutorial';
  TooltipPosition: typeof TooltipPosition = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = "";

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
      this.x = $event.clientX;
      this.y = $event.clientY;
      this.coordinates = `${this.x},${this.y}`;
  }

}
