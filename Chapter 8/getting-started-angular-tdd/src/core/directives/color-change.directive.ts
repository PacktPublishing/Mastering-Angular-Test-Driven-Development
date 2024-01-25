import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorChange]',
})
export class ColorChangeDirective implements OnInit {
  @Input() colorChange!: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.colorChange);
  }
}
