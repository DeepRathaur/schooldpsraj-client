import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-three-sixty',
	templateUrl: './three-sixty.component.html',
	styleUrls: ['./three-sixty.component.css']
})
export class ThreeSixtyComponent implements OnInit {

	constructor() { }
	smartClassFlagOnScr = true;
	
	ngOnInit() {
		setInterval(()=>{
			if(window.scrollY > 600 && this.smartClassFlagOnScr){
				this.smartClassMain = this.smartClassArr;
				this.smartClassFlagOnScr = false;
			}
		}, 500);
	}


	// main 360 tabs icons
	smartClass:boolean = true;
	specialyAbled:boolean = false;
	gpsEnabled:boolean = false;
	Counselor_Room:boolean = false;
	Mulit_Specility_Clinic:boolean = false;
	Resource_Center:boolean = false;
	security:boolean = false;
	liberary:boolean = false;



	// icons
	smartClassIcon:boolean = false;
	specialyAbledIcon:boolean = false;
	gpsEnabledIcon:boolean = false;
	Counselor_RoomIcon:boolean = false;
	Mulit_Specility_ClinicIcon:boolean = false;
	Resource_CenterIcon:boolean = false;
	securityIcon:boolean = false;
	liberaryIcon:boolean = false;


	// images
	origin = document.location.origin;
	diffAblFrdMan = [];
	differenAbled = [
	{urls: this.origin+'/assets/img/360/Specially_abled_friendly/1.jpg'},			
	{urls: this.origin+'/assets/img/360/Specially_abled_friendly/2.jpg'},			
	{urls: this.origin+'/assets/img/360/Specially_abled_friendly/3.jpg'},			
	{urls: this.origin+'/assets/img/360/Specially_abled_friendly/4.jpg'}
	]



	// counselor abled
	counselorRoomMain = [];
	counselorRoom = [
	{urls: this.origin+'/assets/img/360/Counselor_Room/1.jpg'},			
	{urls: this.origin+'/assets/img/360/Counselor_Room/2.jpg'},			
	{urls: this.origin+'/assets/img/360/Counselor_Room/3.jpg'},			
	{urls: this.origin+'/assets/img/360/Counselor_Room/4.jpg'}
	]


	// GPS Enabled
	gpsEnabledMain = [];
	gpsEnabledd = [
	{urls: this.origin+'/assets/img/360/GPS_enabled/1.JPG'},			
	{urls: this.origin+'/assets/img/360/GPS_enabled/2.jpg'},			
	{urls: this.origin+'/assets/img/360/GPS_enabled/3.jpg'},			
	{urls: this.origin+'/assets/img/360/GPS_enabled/4.jpg'}			
	]

	// Security
	securityMain = [];
	securityImg = [
	{urls: this.origin+'/assets/img/360/Security/1.jpg'},			
	{urls: this.origin+'/assets/img/360/Security/2.jpg'},			
	{urls: this.origin+'/assets/img/360/Security/3.jpg'},			
	{urls: this.origin+'/assets/img/360/Security/4.jpg'},			
	]



	// Resource center
	resourceCenterMain = [];
	resourceCenter = [
	{urls: this.origin+'/assets/img/360/Resource_Center/1.JPG'},			
	{urls: this.origin+'/assets/img/360/Resource_Center/2.JPG'},			
	{urls: this.origin+'/assets/img/360/Resource_Center/3.JPG'},			
	{urls: this.origin+'/assets/img/360/Resource_Center/4.jpg'},			
	]


	// Libries
	libriesMain = [];
	libries = [
	{urls: this.origin+'/assets/img/360/libries/1.jpg'},			
	{urls: this.origin+'/assets/img/360/libries/2.jpg'},			
	{urls: this.origin+'/assets/img/360/libries/3.jpg'},			
	{urls: this.origin+'/assets/img/360/libries/4.jpg'}
	]


	// Multi Specialiest
	multiSpecialityMain = [];
	multiSpeciality = [
	{urls: this.origin+'/assets/img/360/Multi_speciality_Clinic/1.jpg'},			
	{urls: this.origin+'/assets/img/360/Multi_speciality_Clinic/2.jpg'},			
	{urls: this.origin+'/assets/img/360/Multi_speciality_Clinic/3.jpg'},			
	{urls: this.origin+'/assets/img/360/Multi_speciality_Clinic/4.jpg'},			
	]


	// Multi Specialiest
	smartClassMain = [];
	smartClassArr = [
	{urls: this.origin+'/assets/img/360/Smart_classes/1.jpg'},			
	{urls: this.origin+'/assets/img/360/Smart_classes/2.JPG'},		
	{urls: this.origin+'/assets/img/360/Smart_classes/3.jpg'},		
	{urls: this.origin+'/assets/img/360/Smart_classes/4.jpg'}		
	]

	
	
	















	run(v){
		this.smartClass = false;
		this.specialyAbled = false;
		this.gpsEnabled = false;
		this.Counselor_Room = false;
		this.Mulit_Specility_Clinic = false;
		this.Resource_Center = false;
		this.security = false;
		this.liberary = false;



		// icons
		this.smartClassIcon = false;
		this.specialyAbledIcon = false;
		this.gpsEnabledIcon = false;
		this.Counselor_RoomIcon = false;
		this.Mulit_Specility_ClinicIcon = false;
		this.Resource_CenterIcon = false;
		this.securityIcon = false;
		this.liberaryIcon = false;





		if(v=='library'){
			this.liberary = true;
			this.liberaryIcon = true;
			this.libriesMain = this.libries;				

		}else if(v=='security'){
			this.security = true;
			this.securityIcon = true;
			this.securityMain = this.securityImg;		
		}else if(v=='multiSpecialityClinic'){
			this.Mulit_Specility_Clinic = true;
			this.Mulit_Specility_ClinicIcon = true;		
			this.multiSpecialityMain = this.multiSpeciality;
		}else if(v=='GPS_Enabled_Buses'){
			this.gpsEnabled = true;
			this.gpsEnabledIcon = true;
			this.gpsEnabledMain = this.gpsEnabledd;
		}else if(v=='Smart_Classes'){
			this.smartClass = true;
			this.smartClassIcon = true;
			this.smartClassMain = this.smartClassArr;
		}else if(v=='Differently_Abled'){
			this.specialyAbled = true;
			this.specialyAbledIcon = true;
			this.diffAblFrdMan = this.differenAbled;			
		}else if(v=='Counsellor_room'){
			this.Counselor_Room = true;
			this.Counselor_RoomIcon = true;
			this.counselorRoomMain = this.counselorRoom;
		}else if(v=='Resource_Centers'){
			this.Resource_Center = true;
			this.Resource_CenterIcon = true;
			this.resourceCenterMain = this.resourceCenter;				
		}

	}




}
