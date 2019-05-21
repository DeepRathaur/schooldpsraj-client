import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CommonThingService } from '../../services/common-thing.service';


@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


	constructor(private httpClient:HttpClient, private CommonThingService:CommonThingService) { }
	private ip = this.CommonThingService.getIp();

	eventsArr = [];
	imgArr = [];
	categoryArr = [];
	
	
	// for bigimage
	overlay:boolean = false;
	bigImage = null;

	

	//load more images 
	activeCat:number = 1;
	activeEvent:number = 17;
	activePageCont:number = 1;
	loadMoreBtnHide:boolean = false;
	

	ngOnInit() {
		this.getCategory();
		this.getAllEvents();
		this.getImages();

	}

	





	//for all main tab only
	getAll(){
		this.getCategory();
		this.getAllEvents();
		this.getImages();
	}

	//main tab click bind
	mainTab(v){ 
		let catNam = v[0];
		let catId = v[1];
		let eventId = v[2];	

		this.activeCat = v[1];
		this.activeEvent = v[2];

		// activate load more btn
		this.loadMoreBtnHide = false;
		this.getEventCatWis(catId);
		this.getImagesCatWise(catId);
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/gallery/'+ catId +'/'+ eventId +'/1').subscribe(item => {											
			// this.imgArr = item.result.galleries;			
		})
	}

	// event button click bind
	runEvent(v){		
		let catId = v[1];
		let eventId = v[0];
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/gallery/'+ catId +'/'+eventId+'/1').subscribe(item => {											
			this.imgArr = item.result.galleries;			
		})
		// activate load more btn
		this.loadMoreBtnHide = false;
		
	}




	// get categories
	getCategory(){
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/category').subscribe(item => {				
			this.categoryArr = item.result.categories;						
		})	
	}
	//get all Events
	getAllEvents(){
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/events').subscribe(item => {											
			this.eventsArr = item.result.events;			
		})	
	}

	//get all Events categories wise
	getEventCatWis(v){
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/events/'+v).subscribe(item => {											
			this.eventsArr = item.result.events;			
		})	
	}

	//get all images
	getImages(){
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/gallery/1').subscribe(item => {											
			this.imgArr = item.result.galleries;
			// console.log(item); 		
		})
	}

	//get images cate wise
	getImagesCatWise(v){
		this.httpClient.get<{status:boolean, result: any}>(this.ip+'v1/gallerycatwise/' + v + '/1').subscribe(item => {											
			this.imgArr = item.result.galleries;
		})
	}

	//showBig image on thumbnail click
	showBig(v){		
		this.overlay = true;
		this.bigImage = v;
	}
	//hide overlay
	hideOverlay(){
		this.overlay = false;
	}

	

	
	loadMore(){
		this.activePageCont++;
		console.log('active page count' + this.activePageCont);
		console.log('active category ' +this.activeCat);
		console.log('active evetn' + this.activeEvent);
		this.httpClient.get<{status:boolean, result: {galleries:any, count:number, pages:number}}>(this.ip+'v1/gallery/'+this.activeCat+ '/'  + this.activeEvent + '/' + this.activePageCont).map((item)=>{
			console.log(item);
			if(item.result.galleries.length < 5 ||  item.result.galleries.length == 0){
				//hide load more btn
				this.loadMoreBtnHide = true;
			}
			return item.result.galleries;

		}).subscribe(item => {			
			for(let j=0; j<item.length; j++){				
				this.imgArr.push(item[j]);	
			}
		})		
	}


}
