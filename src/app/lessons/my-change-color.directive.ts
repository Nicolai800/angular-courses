import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myChangeColor]',
})
export class MyChangeColorDirective {
  @Input('myChangeColor') colors?: string[];

  private _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit() {
    this.changeColor(this._el);
  }

  // Bad practice
  private changeColor(el: ElementRef) {
    if (this.colors && this.colors.length > 0) {
      setInterval(() => {
        el.nativeElement.style.color =
          this.colors![Math.floor(Math.random() * this.colors!.length)];
      }, 2000);
    }
  }
}
