import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
  <h3>first</h3>

  <span>this is the original array </span>
  <p>{{acceptInput}}</p>
    <ul>
      <li *ngFor="let name of acceptInput">
        {{name}}
      </li>
    </ul>

    <h3>second</h3>

    <ul>
    <li appUpper *ngFor="let name of acceptInput">
      {{name}}
    </li>
  </ul>

  <h3>third</h3>
  <span>here show/hide this tag</span>

  <ul appMyvisibility visibility="false">
  <li appUpper *ngFor="let name of acceptInput">
    {{name}}
  </li>
</ul>

<h3>fourth</h3>

<div appMycolor (onChangeColor)="selectedColor=$event" >press me to change color
 </div>
 current color is {{selectedColor}}
`
})
export class MainComponentComponent implements OnInit {
  @Input() acceptInput;

  public selectedColor = "test";

  constructor() { }

  ngOnInit() {
  }

  displayResult(count) {
    console.log(count);
    this.acceptInput = count;
  }

}
