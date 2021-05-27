import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[autosize]'
})
export class AutosizeDirective {

  constructor(public element: ElementRef) {
  }

  @HostListener('input', ['$event.target'])
  adjust() {
    let elementRef = this.element.nativeElement;
    elementRef.style.overflow = 'hidden';
    elementRef.style.height = 'auto';
    elementRef.style.height = elementRef.scrollHeight + 'px';
  }
}