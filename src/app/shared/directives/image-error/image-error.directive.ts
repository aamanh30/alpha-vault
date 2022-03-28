import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[alphaVaultImageError]'
})
export class ImageErrorDirective {
  @Input() altSrc = 'assets/icons/default-thumbnail.png';
  @HostListener('error', ['$event']) handleError(event: any) {
    this.updateImagePath(event);
  }
  constructor(private element: ElementRef) {}

  updateImagePath(event: any): void {
    (this.element.nativeElement as HTMLImageElement).src = this.altSrc;
  }
}
