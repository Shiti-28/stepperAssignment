import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Loginform } from '../model/loginform';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  lform!:Loginform;

  Url:string="http://localhost:3000";
  constructor(public http:HttpClient) { }

    //submit data
    postData(data:any){
      
      return this.http.post<any>(this.Url+"/register",data);
      

    }

}
