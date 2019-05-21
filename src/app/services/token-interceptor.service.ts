import { Injectable, Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
	

	constructor(private injector : Injector) { }
	tokenizedReq = null;
	intercept(req, next){
		let authService = this.injector.get(AuthServiceService)		
		
			//login page
			if(window.location.pathname == '/secure-panel'){
				this.tokenizedReq = req.clone({
					setHeaders:{
						// Authorization: authService.getToken(),
						headers:new Headers({'Content-Type':'application/json'})
					}
				})

			}else{ 
				this.tokenizedReq = req.clone({
					setHeaders:{
						Authorization: authService.getToken(),
						headers:new Headers({'Content-Type':'application/json'})
					}
				})


			}



			return next.handle(this.tokenizedReq)
		}
		

		
	}



