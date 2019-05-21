import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-acedmic',
	templateUrl: './acedmic.component.html',
	styleUrls: ['./acedmic.component.css']
})
export class AcedmicComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	OUR_CAMPUS:boolean = true;
	EXCLUSIVE_SERVICES:boolean = false;
	STAGES_OF_STUDY:boolean = false;
	STREAMS:boolean = false;
	THE_DPS:boolean = false;
	co_curr:boolean = false;
	color:string = '#c7c7c7'; 	
  mainTab = true;
  main(v){
    
    this.OUR_CAMPUS = false;
    this.EXCLUSIVE_SERVICES = false;
    this.STAGES_OF_STUDY = false;
    this.STREAMS = false;
    this.THE_DPS = false;
    this.co_curr = false;

    // reactivateDefaltSubTab
    this.A_COMPREHENSIVE_TRINITY_sub = true;
    this.SCHOOL_CLINIC_sub = true;
    this.PRE_PRIMARY_SCHOOL_sub = true;
    this.SCIENCE_STREAM_sub = true;
    this.DPS_SOCIETY_sub = true;
    this.saturday_competition_sub = true;
    
    if(v =='OUR_CAMPUS'){
      this.OUR_CAMPUS = true;
      this.color = '#c7c7c7';
    }else if(v =='EXCLUSIVE_SERVICES'){
      this.EXCLUSIVE_SERVICES = true;
      this.color = '#f7822d';
    }else if(v =='STAGES_OF_STUDY'){
      this.STAGES_OF_STUDY = true;
      this.color = '#8fc52b';
    }else if(v =='STREAMS'){
      this.STREAMS = true;
      this.color = '#dadb78';
    }else if(v =='THE_DPS'){
      this.THE_DPS = true;
      this.color = '#3ab7e9';
    }else if(v =='co_curr'){
      this.co_curr = true;
      this.color = '#fec93e';
    }



  }



  TrainedFaculty:boolean = true;
  academicFocus:boolean = true;
  fairAssesment:boolean = true;

  TrainedFaculty_full:boolean = false;
  academicFocus_full:boolean = false;
  fairAssesment_full:boolean = false;

  readMore(v){
    this.TrainedFaculty = false;
    this.academicFocus = false;
    this.fairAssesment = false;


    this.TrainedFaculty_full = false;
    this.academicFocus_full = false;
    this.fairAssesment_full = false;

    if(v=='TrainedFaculty'){
      this.TrainedFaculty_full = true;

    }else if(v=='academicFocus'){
      this.academicFocus_full = true;

    }else if(v=='fairAssesment'){
      this.fairAssesment_full = true;
    }


  }

  back(){
    this.TrainedFaculty_full = false;
    this.academicFocus_full = false;
    this.fairAssesment_full = false;

    this.TrainedFaculty = true;
    this.academicFocus = true;
    this.fairAssesment = true;

  }



  trainedFaculty:boolean = false;
  academic:boolean = false;
  fair:boolean = false;








  // subtabs
  OUR_CAMPUS_sub:boolean = false;
  EXCLUSIVE_SERVICES_sub:boolean = false;
  STAGES_OF_STUDY_sub:boolean = false;
  STREAMS_sub:boolean = false;
  THE_DPS_sub:boolean = false;
  co_curr_sub:boolean = false;
  A_COMPREHENSIVE_TRINITY_sub:boolean = true;
  THE_TEACHER_TAUGHT_BOND_sub:boolean = false;
  SCHOOL_PARENT_PARTNERSHIP_sub:boolean = false;
  LEARNING_DISABILITIES_sub:boolean = false;
  CONTRIBUTING_CITIZENS_sub:boolean = false;
  SCHOOL_CLINIC_sub:boolean = true;
  SCHOOL_COUNSELLOR_sub:boolean = false;
  SCHOOL_LIBRARY_sub:boolean = false;  
  CAREER_COUNSELLING_sub:boolean = false;
  AWARDS_sub:boolean = false;
  REMEDIAL_CLASSES_sub:boolean = false;
  PUBLIC_EXAMINATION_sub:boolean = false;
  PRE_PRIMARY_SCHOOL_sub:boolean = true;
  PRIMARY_SCHOOL_sub:boolean = false;
  Grades_6_to_12_sub:boolean = false;
  SCIENCE_STREAM_sub:boolean = true;
  COMMERCE_STREAM_sub:boolean = false;
  HUMANITIES_STREAM_sub:boolean = false;
  DPS_SOCIETY_sub:boolean = true;
  WHY_DPS_sub:boolean = false;
  OUR_OFFER_sub:boolean = false;
  OUR_CURRICULUM_sub:boolean = false;
  OUR_PEDAGOGY_sub:boolean = false;
  BEYOND_ACADEMIA_sub:boolean = false;
  EVALUATIONS_sub:boolean = false;
  saturday_competition_sub:boolean = true;
  SUMMER_CAMP_sub:boolean = false;
  PTM_sub:boolean = false;
  BIRTHDAYS_sub:boolean = false;
  EDUCATIONAL_TRIPS_sub:boolean = false;
  ADVENTURE_TRIP_sub:boolean = false;
  

  tab(v){  
    this.OUR_CAMPUS_sub = false;
    this.EXCLUSIVE_SERVICES_sub = false;
    this.STAGES_OF_STUDY_sub = false;
    this.STREAMS_sub = false;
    this.THE_DPS_sub = false;
    this.co_curr_sub = false;
    this.A_COMPREHENSIVE_TRINITY_sub = false;
    this.THE_TEACHER_TAUGHT_BOND_sub = false;
    this.SCHOOL_PARENT_PARTNERSHIP_sub = false;
    this.LEARNING_DISABILITIES_sub = false;
    this.CONTRIBUTING_CITIZENS_sub = false;
    this.SCHOOL_CLINIC_sub = false;
    this.SCHOOL_COUNSELLOR_sub = false;
    this.SCHOOL_LIBRARY_sub = false;  
    this.CAREER_COUNSELLING_sub = false;
    this.AWARDS_sub = false;
    this.REMEDIAL_CLASSES_sub = false;
    this.PUBLIC_EXAMINATION_sub = false;
    this.PRE_PRIMARY_SCHOOL_sub = false;
    this.PRIMARY_SCHOOL_sub = false;
    this.Grades_6_to_12_sub = false;
    this.SCIENCE_STREAM_sub = false;
    this.COMMERCE_STREAM_sub = false;
    this.HUMANITIES_STREAM_sub = false;
    this.DPS_SOCIETY_sub = false;
    this.WHY_DPS_sub = false;
    this.OUR_OFFER_sub = false;
    this.OUR_CURRICULUM_sub = false;
    this.OUR_PEDAGOGY_sub = false;
    this.BEYOND_ACADEMIA_sub = false;
    this.EVALUATIONS_sub = false;
    this.saturday_competition_sub = false;
    this.SUMMER_CAMP_sub = false;
    this.PTM_sub = false;
    this.BIRTHDAYS_sub = false;
    this.EDUCATIONAL_TRIPS_sub = false;
    this.ADVENTURE_TRIP_sub = false;

    // console.log(v);
    if(v == 'OUR_CAMPUS_sub'){
      this.OUR_CAMPUS_sub = true;
    }
    else if(v == 'EXCLUSIVE_SERVICES_sub'){
      this.EXCLUSIVE_SERVICES_sub = true;
    }
    else if(v == 'STAGES_OF_STUDY_sub'){
      this.STAGES_OF_STUDY_sub = true;
    }
    else if(v == 'STREAMS_sub'){
      this.STREAMS_sub = true;
    }
    else if(v == 'THE_DPS_sub'){
      this.THE_DPS_sub= true;
    }
    else if(v == 'co_curr_sub'){
      this.co_curr_sub = true;
    }
    else if(v == 'A_COMPREHENSIVE_TRINITY_sub'){

      this.A_COMPREHENSIVE_TRINITY_sub = true;
    }
    else if(v == 'THE_TEACHER_TAUGHT_BOND_sub'){
      this.THE_TEACHER_TAUGHT_BOND_sub = true;
    }else if(v == 'SCHOOL_PARENT_PARTNERSHIP_sub'){
      this.SCHOOL_PARENT_PARTNERSHIP_sub = true;
    }
    else if(v == 'LEARNING_DISABILITIES_sub'){
      this.LEARNING_DISABILITIES_sub = true;
    }
    else if(v == 'CONTRIBUTING_CITIZENS_sub'){
      this.CONTRIBUTING_CITIZENS_sub = true;
    }
    else if(v == 'SCHOOL_CLINIC_sub'){
      this.SCHOOL_CLINIC_sub = true;
    }
    else if(v == 'SCHOOL_COUNSELLOR_sub'){
      this.SCHOOL_COUNSELLOR_sub = true;
    }
    else if(v == 'SCHOOL_LIBRARY_sub'){
      this.SCHOOL_LIBRARY_sub = true;
    }   
    else if(v == 'CAREER_COUNSELLING_sub'){
      this.CAREER_COUNSELLING_sub = true;
    }
    else if(v == 'AWARDS_sub'){
      this.AWARDS_sub = true;
    }
    else if(v == 'REMEDIAL_CLASSES_sub'){
      this.REMEDIAL_CLASSES_sub = true;
    }
    else if(v == 'PUBLIC_EXAMINATION_sub'){
      this.PUBLIC_EXAMINATION_sub = true;

    }
    else if(v == 'PRE_PRIMARY_SCHOOL_sub'){
      this.PRE_PRIMARY_SCHOOL_sub = true;

    }
    else if(v == 'PRIMARY_SCHOOL_sub'){
      this.PRIMARY_SCHOOL_sub = true;

    }
    else if(v == 'Grades_6_to_12_sub'){
      this.Grades_6_to_12_sub = true;

    }
    else if(v == 'SCIENCE_STREAM_sub'){
      this.SCIENCE_STREAM_sub = true;

    }
    else if(v == 'COMMERCE_STREAM_sub'){
      this.COMMERCE_STREAM_sub = true;

    }
    else if(v == 'HUMANITIES_STREAM_sub'){
      this.HUMANITIES_STREAM_sub = true;
    }
    else if(v == 'DPS_SOCIETY_sub'){
      this.DPS_SOCIETY_sub = true;


    }
    else if(v == 'WHY_DPS_sub'){
      this.WHY_DPS_sub = true;


    }
    else if(v == 'OUR_OFFER_sub'){
      this.OUR_OFFER_sub = true;


    }
    else if(v == 'OUR_CURRICULUM_sub'){
      this.OUR_CURRICULUM_sub = true;


    }
    else if(v == 'OUR_PEDAGOGY_sub'){
      this.OUR_PEDAGOGY_sub = true;


    }
    else if(v == 'BEYOND_ACADEMIA_sub'){
      this.BEYOND_ACADEMIA_sub = true;


    }
    else if(v == 'EVALUATIONS_sub'){
      this.EVALUATIONS_sub = true;


    }
    else if(v == 'saturday_competition_sub'){
      this.saturday_competition_sub = true;


    }
    else if(v == 'SUMMER_CAMP_sub'){
      this.SUMMER_CAMP_sub = true;


    }
    else if(v == 'PTM_sub'){
      this.PTM_sub = true;


    }
    else if(v == 'BIRTHDAYS_sub'){
      this.BIRTHDAYS_sub = true;


    }
    else if(v == 'EDUCATIONAL_TRIPS_sub'){
      this.EDUCATIONAL_TRIPS_sub = true;


    }
    else if(v == 'ADVENTURE_TRIP_sub'){
      this.ADVENTURE_TRIP_sub = true;


    }




  }

}
