import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOn(){
    this.backgoundColor = this.highlightCololr
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.backgoundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgoundColor: string = ""

@Input() defaultColor: string = 'white'
@Input('Highlight') highlightCololr: string = 'yellow'

  constructor() { }
ngOnInit(){
  this.backgoundColor = this.defaultColor
}
}

