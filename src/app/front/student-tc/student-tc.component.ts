import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {  Headers, Response} from '@angular/http';
import { CommonThingService } from '../../services/common-thing.service';
// import {  Tc } from '../tc';
import 'rxjs/Rx';

declare let $:any;

@Component({
	selector: 'app-student-tc',
	templateUrl: './student-tc.component.html',
	styleUrls: ['./student-tc.component.css']
})
export class StudentTcComponent implements OnInit {

	constructor(private httpClient:HttpClient, private CommonThingService:CommonThingService) { }

	private ip = this.CommonThingService.getIp();

	ngOnInit() {
	}


	data = { searchBy:'', field:'' }
	tc = [];
	flag  = false;
	placeholder:string = '';

	loader:boolean = false;
	errorMsg:boolean = false;
	



	searchBy(v){
		if(v == 'Admission_No' ){
			this.placeholder = 'Enter Admission No.'
		}else if(v == 'Student_Name'){
			this.placeholder = 'Enter Name of Student '		
		}
		
	}

	run(){
		if(this.errorMsg){
			this.errorMsg = false;
		}


		if(this.data.searchBy == '' && this.data.field == ''){
			alert('Kindly fill student information')			
			return false;
		} else if(this.data.searchBy == 'Admission_No'){	
			this.loader = true;		
			this.httpClient.get(this.ip+'v1/students?regno=' + this.data.field + '&name=',  { observe: 'response' }).subscribe(item => {	
				this.tc = [];
				this.loader = false;
				if(item.body != null){
					this.flag = true;
					this.tc.push(item.body)		
				}else{
					alert('No record found');
				}									
			},
			err => {					
				this.errorMsg =  true;
				this.loader =  false;
			}
			)			
		} else if(this.data.searchBy == 'Student_Name'){	
			this.loader = true;				
			this.httpClient.get(this.ip+'v1/students?regno=&name='+this.data.field,  { observe: 'response' }).subscribe(item => {				
				this.tc = [];
				this.loader = false;
				if(item.body != null){
					this.flag = true;
					this.tc.push(item.body)		
				}else{
					alert('No record found');
				}
			},
			err => {
				// console.log('something is wrong');
				this.errorMsg =  true;
				this.loader =  false;

			}
			)			
		} 




		

	}

}

