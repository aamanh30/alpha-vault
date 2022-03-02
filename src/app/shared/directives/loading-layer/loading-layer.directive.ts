import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[alphaVaultLoadingLayer]'
})
export class LoadingLayerDirective implements OnChanges, OnInit {
  @Input() loading: boolean = false;
  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleLayer();
  }

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.position = 'relative';
  }

  toggleLayer(): void {
    if (this.loading) {
      const divElement = document.createElement('div');
      divElement.classList.add('loading-layer');
      (this.elementRef.nativeElement as HTMLElement).appendChild(divElement);
      return;
    }
    const loadingElement = (
      this.elementRef.nativeElement as HTMLElement
    )?.parentNode?.querySelector('.loading-layer');

    if (!loadingElement) {
      return;
    }
    (this.elementRef.nativeElement as HTMLElement)?.removeChild(loadingElement);
  }
}
