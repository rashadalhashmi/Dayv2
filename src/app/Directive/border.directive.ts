import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Border]'
})
export class BorderDirective implements OnInit {
  
  @Input('Border') shadowBackground ='black'
   
  constructor(public element:ElementRef) {

   }
 
   ngOnInit(): void {
     
    this.element.nativeElement.style = `border-radius: 25px ;
                                        box-shadow: 5px 5px ${this.shadowBackground}; `
   }

     @HostListener('mouseenter') onMouseEnter(){
      this.element.nativeElement.style = `box-shadow: 8px 8px ${this.shadowBackground}; border-radius: 25px ;`
  }
 
   @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style = `box-shadow: 5px 5px  ${this.shadowBackground}; border-radius: 25px ;`
 }
 
}
