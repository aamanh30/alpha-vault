import { InputTypes } from './../../configs/directives.config';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[alphaVaultToggleInput]'
})
export class ToggleInputDirective implements OnInit {
  @Input() type: InputTypes = InputTypes.password;
  @Input() toggleType: InputTypes = InputTypes.text;
  @HostListener('click', ['$event']) onClick(event: Event) {
    this.toggleInput();
  }
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).style.cursor = 'pointer';
  }

  toggleInput(): void {
    const { firstChild: inputTag } =
      this.elementRef.nativeElement.parentNode?.parentNode?.children?.[1];
    const type = (inputTag as HTMLInputElement).getAttribute('type');
    (inputTag as HTMLInputElement).setAttribute(
      'type',
      type === this.type ? this.toggleType : this.type
    );
  }
}
