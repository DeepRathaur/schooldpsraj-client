import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonThingService } from './common-thing.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {	
  constructor(private http: HttpClient, private router:Router,  private CommonThingService:CommonThingService) { }

  private _loginUser = this.CommonThingService.getIp() + 'v1/users/login';
  loginUser(user){    
    let reqHeader = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post<any>(this._loginUser, user, {headers:reqHeader});	
  }

  logedIn(){      
    return !!localStorage.getItem('token');
  }

  getToken() {  
    const helper = new JwtHelperService();       
    const isExpired = helper.isTokenExpired(localStorage.getItem('token'));    
    if(!isExpired){      
      return localStorage.getItem('token'); 
    }else{
      this.router.navigate(['/secure-panel']);      
      localStorage.removeItem('token'); 
    }

  }
}





