import {Component, Input} from '@angular/core';

export class Hit{
  xVal = 0;
  yVal = 0;
  rVal = 1;

  showHit(): void{
    console.log(this.toString());
  }

  toString(): string{
    return 'X: ' + this.xVal + ' Y: ' + this.yVal + ' R: ' + this.rVal;
  }
}

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent{
  @Input() hit: Hit = new Hit();


}
