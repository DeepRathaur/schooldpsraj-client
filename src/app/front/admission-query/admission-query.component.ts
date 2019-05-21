import { Component, OnInit, ViewChild, style } from '@angular/core';
import { CommonThingService } from '../../services/common-thing.service';
// import {User} from '../../models/user';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admission-query',
  templateUrl: './admission-query.component.html',
  styleUrls: ['./admission-query.component.css']
})
export class AdmissionQueryComponent implements OnInit {
  //  user:User;
  constructor(private CommonThingService: CommonThingService,
    private httpClient: HttpClient) { }
  private ip = this.CommonThingService.getIp();


  @ViewChild('f') signupForm: NgForm;
  data = { name: '', mobileno: '', email: '' };
  // mail: boolean = false;
  err: boolean = false;
  adquery: boolean = false;
  val = [];
  stUrl: string = 'data';
  run(f) {
    this.err = false;
    // this.mail = true;
    this.adquery = false;
    this.httpClient.post(this.ip + 'v1/admissionquery', this.data).subscribe(item => {
      // this.mail = false;
      this.adquery = true;
      this.signupForm.reset()
    }, err => {
      err = true;
    });
  }
  off() {
    this.adquery = false;
  }


  ngOnInit() {
  }
  mobileInputValidat($event){
		this.CommonThingService.mobileInputValidat($event);
	}


}
