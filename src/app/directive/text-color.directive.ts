import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class TextColorDirective {

  // myColor 속성을 적용한 HTML Element를 host라고 지칭.
  @HostListener('click', ['$event']) elementClick(e) {
    // e 안에는 event 객체가 들어온다.
    // this는 directive 객체를 지님
    console.log(e);
    alert(e.srcElement.innerHTML);
  }

  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'darkred');
  }

}
