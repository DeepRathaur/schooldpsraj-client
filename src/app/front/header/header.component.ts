import { Component, OnInit } from '@angular/core';

declare let $:any;

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {

		setInterval(function(){
			if(window.location.href.indexOf('home') == -1){
				$('.logo').css({'left':'9px'});
				$('.logo img').css({'width':'75px' });

			}else{
				$('.logo').css({'left':'58px'});
				$('.logo img').css({'width':'154px' });
			}

		},500)

		
	

	}
	

}
