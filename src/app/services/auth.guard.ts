import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from './auth-service.service';
// import { LoginServiceService } from './login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router:Router, private _authService:AuthServiceService  ){}
	canActivate() :boolean {
		if(this._authService.logedIn()){
			return true;
		}else{
			this.router.navigate(['/secure-panel'])
			return false;
		}
	}	
}




	// auth.guard.ts
	// --------------
	// import { Injectable } from '@angular/core';
	// import { CanActivate, Router } from '@angular/router';

	// import { AuthService } from './auth.service';

	// @Injectable({
	// 	providedIn: 'root'
	// })
	// export class AuthGuard implements CanActivate {

	// 	constructor(private _authService:AuthService, private router:Router){}

	// 	canActivate() :boolean {
	// 		if(this._authService.logedIn()){
	// 			return true;
	// 		}else{
	// 			this.router.navigate(['/login'])
	// 			return false;
	// 		}
	// 	}

	// }