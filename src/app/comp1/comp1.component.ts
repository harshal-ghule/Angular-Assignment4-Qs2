import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  public info = [];
  public IsSet = false;

  constructor(private _studentservice : StudentDetailsService) { }

  ngOnInit() 
  {
    this._studentservice.GetStudentDetails()
    .subscribe(data=>this.info=data);
  }

  public getData()
  {
    this.IsSet = true;
  }
}
