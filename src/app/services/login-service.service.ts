import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';



@Injectable()
export class LoginServiceService {
	constructor(private Router:Router, private authSer:AuthServiceService ) { }	
	login(v) {
		this.authSer.loginUser(v).subscribe(
			res => {	
			console.log(res);		
				localStorage.setItem('token', res.token);
				this.Router.navigate(['/dashboard']);
			},					
			err => console.log(err), 			
			)
	}	
}




	// constructor(private _auth:AuthService, private Router:Router) { }

	// 	ngOnInit() {
	// 	}

	// 	loginUserData = {}

	// 	run(){
	// 		this._auth.loginUser(this.loginUserData).subscribe(
	// 			res => {					
	// 				localStorage.setItem('token', res.token);
	// 				this.Router.navigate(['/special']);
	// 			},					
	// 			err => console.log(err), 			
	// 			)			
	// 	}