import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHovering]'
})
export class HoveringDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering(false);
  }
  private hovering(hover: boolean) {
    if(hover){
      this.el.nativeElement.style.transform = `scale(1.1)`;
      this.el.nativeElement.style.zIndex = 100;
    }
    else {
      this.el.nativeElement.style.transform = `scale(1)`;
      this.el.nativeElement.style.zIndex = 1;
    }
  }


}
