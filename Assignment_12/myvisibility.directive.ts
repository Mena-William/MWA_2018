import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {


  @HostBinding('style.display') displaying: string;
  
  @Input("visibility") defaultVisibility: boolean = false;

  ngOnInit() {
    if (this.defaultVisibility == true) 
      this.displaying = "block";

    else {
      this.displaying = "none";
    }
  }

}