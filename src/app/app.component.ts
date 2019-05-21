import { Component, OnInit, DoCheck} from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let $ :any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit, DoCheck{
	constructor(private httpClient:HttpClient) { }

	data = {first_name:'', last_name:'', email:'', tel:'', company_Name:'', message:'' };

	run () {		
		this.httpClient.post('http://192.168.9.116:3000/v1/contacts', this.data).subscribe(item =>{
			console.log(item)			
		});
	}  

	ngDoCheck(){
		$('.slider-holder').height(window.innerHeight + 'px');
		$('.nav-link').on('click', function(){
			$('.nav-item  a').css({'color':'black'})    
			$(this).css({'color':'#006b4f', 'font-weight':'bold'})

		})
	}
	ngOnInit(){			

		$(document).ready(function() {

			$('.slider-holder').height(window.innerHeight + 'px');

			$('.menu').on('click', function() {
				$('.nav-slider').toggle(200);
				$('ul.mainNav').toggle(200);
				$('.naviRight').toggle('fast');
			})
			$('.grpNav').on('click', function() {
				$(this).parents('li').find('ul.subMenu').toggle();
				
			})

			

			$('.nav-item').on('click', function() {
				$('.nav-item').css({ 'border-top': '0' })
				// $(this).css({ 'border-top': '4px solid #155724' })
			})

			var ind = 1;
			let flg = true;
			var gg = '';
			$('#'+ind).animate({opacity: 1}, 500);
			
			setInterval(function(){
				if(flg){							
					$('#'+ind).animate({opacity: 1}, 400);					
					$("#1, #2").not('#'+ind).animate({opacity: 0}, 400);
					if(ind == 1){
						ind++;
					}else{
						ind = 1;
					}

				}	
			}, 4000)
			$('.naviRight').on('click', function(){	
				flg = false;			
				if(ind > 1){
					ind = 1;
				}else{
					ind++;	
				}				
				$('#'+ind).animate({opacity: 1}, 400);					
				$("#1, #2").not('#'+ind).animate({opacity: 0}, 400, function(){
					flg = true;
				});
				
			})
			$(window).focus(function() {
				if (this.gal)
					this.gal = setInterval(this.gal, 2000);
			});

			$(window).blur(function() {
				clearInterval(this.gal);
				this.gal = 0;
			});
			$('.naviLeft').on('click', function(){	
				flg = false;			
				if(ind == 1){
					ind = 2;
				}else{
					ind--;	
				}					
				
				$('#'+ind).animate({opacity: 1}, 400);					
				$("#1, #2").not('#'+ind).animate({opacity: 0}, 400, function(){
					flg = true;
				});
				
			})

			$('.slidArow').on('click', function(){
				$(document).scrollTop(window.innerHeight)
				setTimeout(function(){$('.logo').hide()}, 100)				

			})



			let curret = 0;
			$('#announce' + curret).show();
			curret++;

			setInterval(function(){
				if (  $('.grp span').length -1 == curret  ){
					curret = 0;						
				}else{
					curret++;
				}
				$('.grp span').not('#announce' + curret).hide();
				$('#announce' + curret).show();
			}, 4000);



			// let sh = $('.slider-holder, .banner').height();
			// let lh = $('.logo').height()+400;

			// if(window.innerWidth > 520){
			// 	$(document).ready(function(){
			// 		$(document).on('scroll', function(){				
			// 			setTimeout(function(){
			// 				let ws = $(window).scrollTop();
			// 				if(ws > sh - lh){
			// 					$('.logo').hide('fast')
			// 				}
			// 				if(ws < sh - lh){
			// 					$('.logo').show('fast')
			// 				}

							
			// 			}, 100);			
			// 		})	
			// 	})
				
				
			// }




		})

		
		
	}

}


