import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class CommonThingService {

  constructor(private http: HttpClient, private router:Router) { }

  getIp(){
  	// staging
  	// return 'http://dpsrajnagar.ckmeout.com:3000/';

  	// live
  	return 'http://dps.ind.in:40000/';

  	// local
  	// return 'http://192.168.9.116:3000/';
  }
  mobileInputValidat(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
}
}
