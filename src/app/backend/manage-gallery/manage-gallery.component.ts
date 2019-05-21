import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
  selector: 'app-manage-gallery',
  templateUrl: './manage-gallery.component.html',
  styleUrls: ['./manage-gallery.component.css']
})
export class ManageGalleryComponent implements OnInit {
  constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService) { }


  categoryArr = [];
  eventsArr = [];
  private ip = this.CommonThingService.getIp();

  ngOnInit() {  
    this.getCategory();
    this.getEvents();

  }

  
  // http://dpsrajnagar.ckmeout.com:3000/


  // getCategories
  getCategory(){
    this.HttpClient.get<any>(this.ip + 'v1/category').subscribe(item => {
      this.categoryArr = item.result.categories;      

    }, err =>{})
  }





  // for category
  creatCate:boolean = false;


  createCategory(){
    this.creatCate = true;
  }
  cancelNewCategory(){
    this.creatCate = false;
  }

  //create new category 
  newCategory = { };
  saveCategory(){
    let t = localStorage.getItem("token");      
    let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t}); 
    
    
    this.HttpClient.post<any>(this.ip+'v1/category', this.newCategory, {headers:reqHeader}).subscribe((v)=>{        
      this.creatCate = false;
      this.getCategory();
    })    
  }  
  trashCategory(v){ 
  if(confirm("Are you sure to delete ")){
    let t = localStorage.getItem("token");      
    let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
    this.HttpClient.delete<any>(this.ip+'v1/category/'+v, {headers:reqHeader}).subscribe((v)=>{        
      this.creatCate = false;
      this.getCategory();
      this.getEvents();
    }) 
    } 
  }

  //end create new category 







 //edit category
 editCategory:boolean = false;
 curntId:number = null;
 editCategoryName = {name:null};
 editItemName:string = '';
 editCategoryFun(v){


   this.curntId = v[1];
   this.editCategoryName.name = v[0];
   this.editCategory = true;   
 }
 cancelEditCategory(){
   this.editCategory = false;
 }
 updateCategoryFun(){    
   let t = localStorage.getItem("token");      
   let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
   this.HttpClient.put<any>(this.ip+'v1/category/'+this.curntId, this.editCategoryName,  {headers:reqHeader}).subscribe((v)=>{        
     this.creatCate = false;
     this.getCategory();
     this.editCategory = false;

   }) 
 }
  //end edit category








  //for event
  createEvent:boolean = false;

    // get all Events
    getEvents(){
      this.HttpClient.get<any>(this.ip+'v1/events').subscribe(item => {
        this.eventsArr = item.result.events;            
      }, err =>{})
    }
    createNewEvent = {}
    createEventFun(){
      this.createEvent = true;
    }
    cancelEvent(){
      this.createEvent = false;
    }
    seveEvent(){
      let t = localStorage.getItem("token");      
      let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});

      this.HttpClient.post<any>(this.ip+'v1/events', this.createNewEvent, {headers:reqHeader}).subscribe((v)=>{  

        this.eventsArr = v.result.events;      
        this.createEvent = false;
        this.getEvents();
      }) 

    }
    









    // trash event
    trashEvent(v){
      if(confirm("Are you sure to delete ")){
      let t = localStorage.getItem("token");      
      let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
      this.HttpClient.delete<any>(this.ip+'v1/events/'+v, {headers:reqHeader}).subscribe((v)=>{                
        this.getEvents();       
      })   
      }   
    }
    //end trash event






    // update event
    updateEvent = {name:null};
    updateEventFlg:boolean = false;
    
    currentEventId:any = '';
    editEvent(v){

      this.updateEventFlg = true;
      this.updateEvent.name = v[1];    
      this.currentEventId = v[0];    
    }
    cancelUpdateEvent(){
      this.updateEventFlg = false;
    }

    updateEventFun(){      
      let t = localStorage.getItem("token");      
      let reqHeader = new HttpHeaders({'Content-Type':'application/json', "Authorization":t});        
      this.HttpClient.put<any>(this.ip+'v1/events/'+ this.currentEventId, this.updateEvent, {headers:reqHeader}).subscribe((v)=>{                
        this.getEvents();        
        this.updateEventFlg = false;
      })  
    }
    //end update event







  // view images
  viewImage:boolean = false
  viewImageFun(){
  	this.viewImage = true;
  }


  //for all images




}
