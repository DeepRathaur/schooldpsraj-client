import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $:any;

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {
		$('.homeNav, .contactNav, .studentTcNav, .principalMsgNav, .aboutDPSNav, .aboutDPSSecurity, .academicsNav, .GalleryNav, .StudentAchieversNav, .admissionNav ').on('click', function(){
			$('.nav-slider, .mainNav').hide();		
			if($('#nav-icon3').hasClass('open')){
				$('#nav-icon3').removeClass('open');
			}else{
				$('#nav-icon3').addClass('open')
			}
		});

		$('.menu').click(function(){
			if($('#nav-icon3').hasClass('open')){
				$('#nav-icon3').removeClass('open')
			}else{
				$('#nav-icon3').addClass('open')
			}
		});

		$('#nav-icon3').on('click', function(){
			if($('#nav-icon3').hasClass('open')){	
				$('div#nav').css({'height':'auto'});
			}else{
				$('div#nav').css({'height':'100%'});
			}
		})



		









	}



	abtDPS(){
		this.router.navigate(['/about-us']);
		setTimeout(()=>{
			let aboutDPS =  $("#aboutDPS").offset().top;
			$(window).scrollTop(aboutDPS);
		}, 500)
		
	}


	milestone(){
		this.router.navigate(['/about-us']);
		setTimeout(()=>{
			let milestone =  $("#milestone").offset().top;
			$(window).scrollTop(milestone);
		}, 500)
		
	}


	prinMsg(){
		this.router.navigate(['/about-us']);

		setTimeout(()=>{
			let prinMsg =  $("#prinMsg").offset().top;
			$(window).scrollTop(prinMsg);
		}, 500)

	}

	goToAchiver(){
		this.router.navigate(['/home']);
		
		setTimeout(()=>{
			let studentAchiver  =  $("#achiverSec").offset().top;
			$(window).scrollTop(studentAchiver);
		}, 500)
	}




}


