import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]',
  standalone: true
})
export class BackgroundImageDirective {
  @Input( 'appBackgroundImage' ) imageUrl!: string;

  constructor( private el: ElementRef ) { }
  ngOnInit(){
    const elementStyle = this.el.nativeElement.style;
    elementStyle.backgroundImage = `url(${ this.imageUrl })`;
    elementStyle.backgroundSize = 'cover';
    elementStyle.backgroundRepeat = 'no-repeat';
    elementStyle.backgroundPosition = 'center';
  }

}
