import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-design',
  templateUrl: './top-design.component.html',
  styleUrls: ['./top-design.component.css']
})
export class TopDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  // text class="cls-390" (click)="run('fairAssestment')"
//   (click)="run('academic')"

// (click)="run('trained')

@Output() acad = new EventEmitter()
	run(v){
		// alert(v);
		this.acad.emit(v);
	}
}
