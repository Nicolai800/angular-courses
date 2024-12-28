import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class MyIfDirective {
  private _show: boolean = false;

  @Input() set myIf(show: boolean) {
    this._show = show;
    this.displayTemplate();
  }

  constructor(
    private vcr: ViewContainerRef,
    private tamplateRef: TemplateRef<unknown>
  ) {}
  ngOnInit() {
    this.displayTemplate();
  }
  private displayTemplate() {
    this.vcr.clear();
    if (this._show) {
      this.vcr.createEmbeddedView(this.tamplateRef);
    }
  }
}
