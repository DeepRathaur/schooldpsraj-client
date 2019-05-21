import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonThingService } from '../../services/common-thing.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {

  constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService, private router:Router) { }
  @ViewChild('r') uploadImage: NgForm;
  @ViewChild('fileInput') fileInput:ElementRef;
  private ip = this.CommonThingService.getIp();
  ngOnInit() {    
    this.get();
  }

  getArr = [];

  // get events
  get(){
    this.HttpClient.get<any>(this.ip+'v1/morquee').subscribe(item => {
      this.getArr = item.result.morquees;            
    }, err =>{})
  }

  // file uplaod
  selectedFile:File;
  uplodFil = {"title":null, "description":null, "file":null}
  uploadData = new FormData();
  
  
  fileHaveSelected(event){
    this.selectedFile = event.target.files[0];    
    this.uploadData.append('file', this.selectedFile, this.selectedFile.name);           
  }


  uploadApiCall(){    
    let t = localStorage.getItem("token");      
    let reqHeader = new HttpHeaders({"Authorization":t});    
    this.uploadData.append('title', this.uplodFil.title);
    this.uploadData.append('description', this.uplodFil.description);            
    this.HttpClient.post<any>(this.ip+'v1/morquee', this.uploadData, {headers:reqHeader}).subscribe((v)=>{
      if(v.status){          
        this.uploadImage.reset();
        this.fileInput.nativeElement.value = "";               
        this.get(); 
        this.showFlg = true;
        this.uplodFil = {"title":null, "description":null, "file":null}
        location.reload();
        // this.showFlg = true;        
      }
      console.log(this.uploadData);  
    }, 
    err => {
      
    }
    )
  }

  // upload new content
    showFlg = true;    
    // when new upload btn click
    uploadNew(){


      this.showFlg = false;
    }

    // when cancel upload btn click
    cancelUplod(){
      this.showFlg = true;
    }

    // trash   
    trash(v){ 
      if(confirm("Are you sure you want to delete this?")){
        let t = localStorage.getItem("token");      
        let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
        this.HttpClient.delete<any>(this.ip+'v1/morquee/'+v, {headers:reqHeader}).subscribe((v)=>{        
        this.get()
        }) 
        } 
      }

      
      updObj = {status:null}
      update(v){        
          if(v.status){
            this.updObj.status = false;
          }else{
            this.updObj.status = true;
          }
          let t = localStorage.getItem("token");      
          let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
          this.HttpClient.put<any>(this.ip+'v1/morquee/'+v.id,  this.updObj,  {headers:reqHeader}).subscribe((v)=>{        
          this.get();          
          }) 
      } 
        
    


}
