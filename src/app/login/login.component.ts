import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
	
})
export class LoginComponent implements OnInit {
	constructor(private router:Router, private AuthServiceService:AuthServiceService) { }
	ngOnInit() {}

	loginUserData = {email:null, password:null}
	login () { 		
		this.AuthServiceService.loginUser(this.loginUserData).subscribe(
			res => {				
				localStorage.setItem('token', res.result.token)
				this.router.navigate(['/secure-panel-dashboard/manage-gallery'])
			},
			err => {if(err.status == 422){
				alert('Kindly enter correct user name and password.');
			}}
		) 
	}  
}