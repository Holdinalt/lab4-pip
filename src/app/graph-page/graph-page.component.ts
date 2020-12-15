import { Component } from '@angular/core';

export class Hit{
  xVal = 0;
  yVal = 0;
  rVal = 0;

  constructor(x: number, y: number, r: number) {
    this.xVal = x;
    this.yVal = y;
    this.rVal = r;

  }
}

@Component({
  selector: 'app-graph-page',
  template: `
    <graph-svg (onClicked)="hit = $event"></graph-svg>
    <app-form [hit]="hit"></app-form>
  `,
  //styleUrls: ['graph.component.css']
})
export class GraphPageComponent {

  hit: Hit = new Hit(0, 0 , 1);

}
