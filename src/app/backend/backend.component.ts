import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-backend',
	templateUrl: './backend.component.html',
	styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

	constructor(private Router:Router) { }
	minHeight:string;
	mobile=false;
	mobileShow = false;
	ngOnInit() {
		this.minHeight = window.innerHeight-70 + 'px';
		if(window.innerWidth < 1300 ){			
			this.mobile = true;		
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  if(window.innerWidth < 1300 ){			
			this.mobile = true;		
	  }else{
	  		this.mobile = false;		
	  }
	}

	logout() {        
		localStorage.removeItem('token');		
		this.Router.navigate(['/secure-panel']);
		
	}
	run(){
		this.mobileShow = false;
	}
	
	menu(){
		this.mobileShow = !this.mobileShow;
	}

	closeMenu(){
		this.mobileShow = !this.mobileShow;
	}

	// @HostListener('window:unload', ['$event'])
	// 	handleUnload(event) {
	// 		this.logout();
			
	// 	}

}

