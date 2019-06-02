import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  @Input("appHightlight") highLightColor: boolean;
  constructor(private elem: ElementRef) {
  }
  @HostListener('change') ngOnChanges() {
    if (this.highLightColor) {
      this.elem.nativeElement.style.backgroundColor = 'Black';
      this.elem.nativeElement.style.color = 'goldenrod';
    }
    else {
      this.elem.nativeElement.style.backgroundColor = 'goldenrod'
      this.elem.nativeElement.style.color = 'black';
    }
  }
  ngOnInit() {
  }
}
