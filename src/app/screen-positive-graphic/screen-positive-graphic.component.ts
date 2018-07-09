import { Component, Input, ElementRef, ViewChildren, Renderer } from '@angular/core';

@Component({
  selector: 'app-screen-positive-graphic',
  templateUrl: './screen-positive-graphic.component.html',
  styleUrls: ['./screen-positive-graphic.component.css']
})
export class ScreenPositiveGraphicComponent{

  @Input() chel: number = 0;

  constructor(private elem: ElementRef, private renderer: Renderer) { }


  ngOnChanges() {
 
      let item = this.elem.nativeElement.children[0].children;

      for(let i=0; i<this.chel; i++ )
              this.renderer.setElementClass(item[i], 'red', true);
  }

}
