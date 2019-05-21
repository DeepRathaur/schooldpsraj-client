// 'http://www.dps.ind.in:40000/v1/contacts
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private httpClient:HttpClient, private CommonThingService:CommonThingService) { }
    private ip = this.CommonThingService.getIp();


  @ViewChild('f') signupForm: NgForm;
  data = {fullname:'', mobileno:'', address:'', email:'', message:''};
  mail:boolean = false;
  report:boolean = false;
  err:boolean = false;
  val = [];
  stUrl:string = 'data';
  run (f) {  
    this.report = false;
    this.err = false;
    this.mail = true;
    this.httpClient.post(this.ip+'v1/contacts', this.data).subscribe(item =>{      
      this.mail = false;
      this.report = true;
      this.signupForm.reset()
    }, err=>{
      err = true;
    });
  }  


  ngOnInit() {
  }

}

