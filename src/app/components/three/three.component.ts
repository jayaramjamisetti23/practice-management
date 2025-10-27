import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // use like <p appHighlight></p>
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent {
  name: string = 'Three Component';
}
