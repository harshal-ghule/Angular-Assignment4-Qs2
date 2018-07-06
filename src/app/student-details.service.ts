import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudInfo } from './student-data';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor(private http:HttpClient)
   { }

   private _url:string = "/assets/Data/student-data.json";

   GetStudentDetails():Observable<StudInfo[]>
  {
  return this.http.get<StudInfo[]>(this._url);  
  }

}
