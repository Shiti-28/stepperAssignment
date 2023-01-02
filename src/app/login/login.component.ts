import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Loginform } from '../model/loginform';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { window } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Url: string = "http://localhost:3000/check"
  loginform!: FormGroup

  constructor(private fb: FormBuilder, public s: ServicesService, public router: Router, public http: HttpClient) { }
  ngOnInit(): void {
    this.loginform = this.fb.group({

      username: [''],
      password: [''],

    })
  }

  Login() {


    this.http.get<any>(this.Url).subscribe(res => {
      const user = res.find((a: any) => {
        return a.fname === this.loginform.value.fname && a.password === this.loginform.value.password
      });

      if (user) {
        alert("you are successfully loggedIn");
        this.router.navigate(['/dash']);
      }
      else{
        alert("user not found");
        this.router.navigate(['/login']);
      }
    },err=>{
      alert("Someting went wrong");
    })
  }
}
