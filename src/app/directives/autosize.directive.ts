import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAutosize]'
})
export class AutosizeDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('input') onInput(): void {
    this.autosize();
  }

  @HostListener('blur') onBlur(): void {
    this.autosize();
  }

  @HostListener('focus') onFocus(): void {
    this.autosize();
  }

  autosize() {
    const nativeElement = this.element.nativeElement;

    this.renderer.setStyle(nativeElement, 'height', `${nativeElement.scrollHeight}px`);
    this.renderer.setStyle(nativeElement, 'overflow', 'hidden');
  }

}
