import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLogoScroll]'
})
export class LogoScrollDirective {

  	constructor(private elRef:ElementRef, private renderer:Renderer2) { }
	@HostListener('window:scroll', ['$event']) onScrollEvent($event){	
		if(window.innerWidth > 520){	
			if(window.scrollY > 300){
				this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');

			}else{
				this.renderer.setStyle(this.elRef.nativeElement, 'display', 'block');
			}
			
		}
	} 

}




