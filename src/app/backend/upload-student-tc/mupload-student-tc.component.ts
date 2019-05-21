import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
	selector: 'app-mupload-student-tc',
	templateUrl: './mupload-student-tc.component.html',
	styleUrls: ['./mupload-student-tc.component.css']
})
export class uploadStudentTcComponent implements OnInit {

	constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService) { }

	ngOnInit() {
	}
   private ip = this.CommonThingService.getIp();

	msg:string = null;
	@ViewChild('f') uploadTcForm:NgForm;
	@ViewChild('fileInput') fileInput:ElementRef;

		// @ViewChild('f') frm:NgForm;


	selectedFile: File;
	uploadIcon = false;

	certificateTc =  {
		"name": null,
		"admission_no": null,
		"certificate_description": null,
		"image":null
	}

	
	fileHaveSelected(event){
		this.selectedFile = event.target.files[0];
		console.log(this.selectedFile);
	}

	uploadTc(){	
		this.uploadIcon = true;	
		let t = localStorage.getItem("token");      
		let reqHeader = new HttpHeaders({"Authorization":t});
		const 	uploadData = new FormData();
				uploadData.append('name', this.certificateTc.name);
				uploadData.append('admission_no', this.certificateTc.admission_no);
				uploadData.append('certificate_description', this.certificateTc.certificate_description);
				uploadData.append('image', this.selectedFile, this.selectedFile.name);
				


		// this.certificateTc.image = uploadData;
		this.HttpClient.post<any>(this.ip+'v1/students', uploadData, {headers:reqHeader}).subscribe((v)=>{
			this.uploadIcon = false;
			if(v.status){
				this.msg = "TC has uploaded.";
				this.uploadTcForm.reset();
				this.fileInput.nativeElement.value = "";
				setTimeout(()=>{this.msg = null}, 2000);
			}
		}, 

		err=>{
			this.uploadIcon = false;
			if(err.status == 422){
				this.msg = 'This admission no TC has already uploaded.';
				setTimeout(()=>{this.msg = null}, 2000);
			}else{
				this.msg = 'Something wrong.'
			}
			
		})

		
	}


}


