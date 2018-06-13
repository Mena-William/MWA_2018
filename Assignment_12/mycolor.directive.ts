import { Directive, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  constructor(private e: ElementRef) {
    //this.onChangeColor = new EventEmitter();
    // e.nativeElement.style.fontSize = '22px'
    //r.setElementStyle(e.nativeElement, 'font-size', '22px')
  }

  @Output() onChangeColor = new EventEmitter();

  colors: string[] = ['red', 'green', 'blue', 'yellow'];
  counter: number = 0;
  selectedColor: string;

  // To Listen to Events that are triggered by client
  @HostListener('click') changeColor() {
    if (this.colors.length == this.counter) {
      this.counter = 0;
    }
    this.selectedColor = this.colors[this.counter];

    this.e.nativeElement.style.color = this.selectedColor;
    this.counter++;
    this.onChangeColor.emit(this.selectedColor);
    //console.log(this.selectedColor);
  }





}
