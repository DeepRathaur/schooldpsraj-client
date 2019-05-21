import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';


@Component({
  selector: 'app-mupload-gallery-images',
  templateUrl: './mupload-gallery-images.component.html',
  styleUrls: ['./mupload-gallery-images.component.css']
})
export class uploadGalleryImagesComponent implements OnInit {

  constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService) { }
  @ViewChild('r') uploadImage: NgForm;
  @ViewChild('fileInput') fileInput:ElementRef;

  msg:string = null;
  private ip = this.CommonThingService.getIp();
  ngOnInit() {
    this.getCategory();
    this.getEvents();
  }

  categoryArr = [];
  eventsArr = [];
  uploadIcon = false;
  
  // getCategories
  getCategory(){
    this.HttpClient.get<any>(this.ip+'v1/category').subscribe(item => {
      this.categoryArr = item.result.categories;      
    // console.log(this.categoryArr);
  }, err =>{})
  }


  // get events
  getEvents(){
    this.HttpClient.get<any>(this.ip+'v1/events').subscribe(item => {
      this.eventsArr = item.result.events;            
    }, err =>{})
  }





  AddCategory:boolean = false;
  AddEvent:boolean = false;
  addEvent(){
  	this.AddEvent = true;
  }
  addCategory(){
  	this.AddCategory = true;
  }
  

  saveCategory(){
  	this.AddCategory = false;
  }
  saveEvent(){
  	this.AddEvent = false;
  }

  selectedFile: File;
  uploadGalleryImage = {"category_id":null, "event_id":null, "image":null}
  
  fileHaveSelected(event){
    this.selectedFile = event.target.files[0];    
  }

  upload(){
       this.uploadIcon = true;
       let t = localStorage.getItem("token");      
       let reqHeader = new HttpHeaders({"Authorization":t});
       const uploadData = new FormData();
           uploadData.append('category_id', this.uploadGalleryImage.category_id);
           uploadData.append('event_id', this.uploadGalleryImage.event_id);        
           uploadData.append('image', this.selectedFile, this.selectedFile.name);
       // this.certificateTc.image = uploadData;
       this.HttpClient.post<any>(this.ip+'v1/gallery', uploadData, {headers:reqHeader}).subscribe((v)=>{
         if(v.status){
             this.msg = 'File have uploaded.';
             this.uploadIcon = false;
             this.uploadImage.reset();
             this.fileInput.nativeElement.value = "";
             setTimeout(()=>{this.msg = null}, 2000);
         }
         
       }, err =>{
         this.msg = 'Something wrong.'
       })
  }

  // uploadTc(){  
 


  // }














}
