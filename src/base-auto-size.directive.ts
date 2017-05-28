import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[baseAutoSize]'
})
export class BaseAutoSizeDirective {

  constructor (private elementRef: ElementRef) { }

  @HostListener('keydown') onKeyDown (): void {
    const element = this.elementRef.nativeElement;

    setTimeout(() => {
      element.style.cssText = 'height: auto;';
      if (element.scrollHeight > element.offsetHeight) {
        element.style.cssText = 'height: auto; overflow: hidden;';
        element.style.cssText = 'height: ' + element.scrollHeight + 'px; overflow: hidden;';
      }
    }, 0);
  }
}
