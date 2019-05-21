import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TcFilterPipe } from '../tc-filter.pipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
  selector: 'app-mview-student-tc',
  templateUrl: './mview-student-tc.component.html',
  styleUrls: ['./mview-student-tc.component.css']
})
export class viewStudentTcComponent implements OnInit {

  constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService) { }
  private ip = this.CommonThingService.getIp();
  innerHeig:number = null;
  ngOnInit() {
    this.innerHeig = window.innerHeight;
    this.getAllTc(this.pageCount);
  }

  img=null;
  overlay:boolean = false;
  showBig(v){
  	this.overlay = true;
  	this.img = v;
  }

  closeOverlay(){
  	this.overlay = false;
  }

  allTc = [];
  searchFild = '';
  pageCount:number = 1;

  getAllTc(v){      
    let t = localStorage.getItem("token");      
    let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});
    this.HttpClient.get<any>(this.ip+'v1/students/'+v,  {headers:reqHeader}).subscribe((v)=>{
      this.allTc = v.result.students;       
    })
  }


  trashTc(v,i){
    if(confirm("Are you sure to delete?")){   
      let t = localStorage.getItem("token");      
      let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});
      this.HttpClient.delete<any>(this.ip+'v1/students/'+v,  {headers:reqHeader}).subscribe((v)=>{
        this.allTc.splice(i, 1);
      }) 
    }
  }


  loadMore(){      
    let t = localStorage.getItem("token");      
    let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});
    this.HttpClient.get<any>(this.ip+'v1/students/'+this.pageCount,  {headers:reqHeader}).subscribe((v)=>{
      v  = v.result.students;
      this.pageCount++;
      for(let j=0; j<v.length; j++){        
        this.allTc.push(v[j]);  
      }
    })
  }




}
