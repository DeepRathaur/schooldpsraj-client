import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor() { }
	
// ------------------------//  learning experience-------------------------
origin = document.location.origin;

	// junoon
	junImg = [];
	junoon = [
	{urls: this.origin+'/assets/img/Leaning_Experience/janoon/01.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/janoon/02.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/janoon/03.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/janoon/04.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/janoon/05.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/janoon/06.jpg'}
	]

	junoonLoadImg(){
		this.junImg = this.junoon;				
	}





	// artFirst
	artFirstMain = [];
	artFirst = [
	{urls: this.origin+'/assets/img/Leaning_Experience/Art_1st/1.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Art_1st/2.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Art_1st/3.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Art_1st/4.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Art_1st/5.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Art_1st/6.jpg'}		
	]
	artFirstFun(){
		this.artFirstMain = this.artFirst;

	}








	// Sports
	sportsMain = [];
	Sports = [		
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/4.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/5.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/6.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/7.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/8.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Sports/9.jpg'}
	]

	sportsFun(){
		this.sportsMain = this.Sports;				
	}


	// testmonials
	testmonials = [];
	testmonialsMain = [		
	{urls:this.origin+'/assets/img/testimonial/1.png'}, 
	{urls:this.origin+'/assets/img/testimonial/2.png'},
	{urls:this.origin+'/assets/img/testimonial/3.png'},
	{urls:this.origin+'/assets/img/testimonial/4.png'},
	{urls:this.origin+'/assets/img/testimonial/5.png'},
	{urls:this.origin+'/assets/img/testimonial/6.png'},
	{urls:this.origin+'/assets/img/testimonial/7.png'},
	{urls:this.origin+'/assets/img/testimonial/8.png'}
	]



	testmonialsFun(){
		this.testmonials = this.testmonialsMain;		
	}

	disableTestimonialBtn = false;
	loadMoreTestimonial(){
		let lenClone = this.testmonials.length;
		for(var j = lenClone; j < lenClone+4; j++){
			this.testmonialsMain.push({urls:this.origin+'/assets/img/testimonial/' + j + '.png'})				
			if(this.testmonialsMain.length ==33){
					this.disableTestimonialBtn = true;
			}
		}
	}


	
	


	// clubFun
	clubMain = [];
	club = [
	{urls: this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/01.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/02.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/03.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/04.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/05.JPG'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Clubs_Societies/06.jpg'}		
	]

	clubFun(){
		this.clubMain = this.club;				
	}



	// olympiad
	OlympiadMain = [];
	Olympiad = [
	{urls: this.origin+'/assets/img/Leaning_Experience/olympiad/01.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/olympiad/02.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/olympiad/03.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/olympiad/04.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/olympiad/05.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/olympiad/06.jpg'}		
	]

	olympiadFun(){
		this.OlympiadMain = this.Olympiad;				
	}




	



	// Book Project
	bookProjectMain = [];
	bookProject = [
	{urls: this.origin+'/assets/img/Leaning_Experience/Book/01.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Book/02.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Book/03.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Book/04.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Book/05.jpg'},
	{urls:this.origin+'/assets/img/Leaning_Experience/Book/06.jpg'}
	
	]

	bookProjectFun(){
		this.bookProjectMain = this.bookProject;				
	}



	// edutainmentMain
	edutainmentMain = [];
	edutainment = [
		// {urls: this.origin+'/assets/img/Leaning_Experience/Edutainment/1.JPG'}, 
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/2.JPG'}, 
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/3.jpg'}, 
		// {urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/4.JPG'}, 		
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/5.JPG'}, 
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/6.JPG'}, 
		// {urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/7.JPG'}, 
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/8.JPG'}, 
		{urls:this.origin+'/assets/img/Leaning_Experience/Edutainment/9.jpg'}
		]


		edutainmentFun(){
			this.edutainmentMain = this.edutainment;				
		}



	// Music and Art
	musicMain = [];
	music = [
	{urls: this.origin+'/assets/img/Leaning_Experience/Music_arts/DSC_3036.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Music_arts/DSC_7268.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Music_arts/DSC_7407.JPG'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Music_arts/4.jpg'}, 
	{urls:this.origin+'/assets/img/Leaning_Experience/Music_arts/5.jpg'}, 		
	{urls:this.origin+'/assets/img/Leaning_Experience/Music_arts/6.jpg'}	

	]


	musicFun(){
		this.musicMain = this.music;				
	}

	// ------------------------// end learning experience-------------------------

	tenthHolder:boolean = false;
	twelthHolder:boolean = true;
	

	showTwelth(){
		this.tenthHolder = false;
		this.twelthHolder = true;
	}
	showtenth(){
		this.tenthHolder = true;
		this.twelthHolder = false;
	}
	
	dektoBigImage:boolean = false;
	testMoni = null;
	testMoniFlg = true;

	artFirstInit = null;
	artFirstInitFlg = true;
	ngOnInit() {
		if(window.innerWidth > 600){
			this.dektoBigImage = true;
		}

		this.testMoni = setInterval(()=>{
			if(window.scrollY > 2491 && this.testMoniFlg){
				this.testmonialsFun();				
				this.testMoniFlg = false;
			}
		}, 800);


		this.artFirstInit = setInterval(()=>{
			if(window.scrollY > 1200 && this.artFirstInitFlg){
				this.artFirstFun();
				this.artFirstInitFlg = false;
			}
		}, 500);
		

		
		
	}

}
