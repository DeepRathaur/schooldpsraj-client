import { Component, OnInit } from '@angular/core';
import { CommonThingService } from '../../services/common-thing.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-marquee-front',
  templateUrl: './marquee-front.component.html',
  styleUrls: ['./marquee-front.component.css']
})
export class MarqueeFrontComponent implements OnInit {
  constructor(private CommonThingService:CommonThingService, private HttpClient:HttpClient) { }

  ngOnInit() {
    this.get();
  }

   //marquee
   marqueeFlg = false;
   getArr = [];
 
   // get events
   get(){
     this.HttpClient.get<any>(this.CommonThingService.getIp()+'v1/morquee').subscribe(item => {
     this.getArr = item.result.morquees;            
     if(this.getArr.length > 0){
       this.getArr.map(v=>{
       if(v.status){
         this.marqueeFlg = true;
       }
       })		
     }
     }, err =>{})
   }
   

}
