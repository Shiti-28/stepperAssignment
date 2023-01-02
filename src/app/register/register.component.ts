import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  firstFormGroup!:FormGroup;
  // secondFormGroup!:FormGroup;
  // thirdFormGroup!:FormGroup;

  // onboardData!:FormGroup;

  namepattern!:"[a-zA-Z]";
  emailpattern!:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  numberpattern!:"[789][0-9]{9}"
  saveData:any=
  {
    "fullname": "",
    "email":"",
    "fathername":"",
    "mothername":"",
    "gender":"",
    "dob":"",
    "mobileno":"",
    "accountno":"",
    "bankname":"",
    "code":"",
    "ibnaking":"",
    "preaddress":"",
    "permaddress":""
  }

  
  constructor(public formBuilder: FormBuilder, public router:Router,public http:HttpClient , public s:ServicesService) { }

  ngOnInit(): void {

    // this.onboardData=this.formBuilder.group({
    //   firstFormGroup:[''],
    //   secondFormGroup:[''],
    //   thirdFormGroup:['']
    // })
   
    
    // this.onboardData=new FormGroup({

    //   // firstFormGroup : new FormGroup({

    //   //   //fctrl:['',Validators.required]
    //   //   'fullname':new FormControl (null, [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]),
    //   //   'email': new FormControl(null, [Validators.pattern(this.emailpattern), Validators.required]),
    //   //   'fathername': new FormControl(null, [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]),
    //   //   'mothername': new FormControl(null, [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]),
    //   //   'mobile': new FormControl(null,[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.numberpattern)]),
    //   //   'gender': new FormControl(null),
    //   //   'dob': new FormControl (null),
    
    //   // }),
    //   // secondFormGroup : this.formBuilder.group({

    //   //   //sctrl:['',Validators.required]
    //   //   fullname: ['', [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]],
    //   //   accountno:['',[Validators.required,Validators.pattern(this.numberpattern)]],
    //   //   bankname:['',[Validators.required,Validators.pattern(this.namepattern),Validators.pattern(this.namepattern)]],
    //   //   code:['',[Validators.required]],
    //   //   ibanking:['',[Validators.required]]
    
    //   // }),
    //   // thirdFormGroup:this.formBuilder.group({
    
    //   //   //fttrl:['',Validators.required]
    //   //   preaddress:['',[Validators.maxLength(60)]],
    //   //   permaddress:['',[Validators.maxLength(60)]],
    
    //   // })   
    // })
  this.firstFormGroup = this.formBuilder.group({

    //fctrl:['',Validators.required]
    fullname: ['', [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]],
    email: ['', [Validators.pattern(this.emailpattern), Validators.required]],
    fathername: ['', [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]],
    mothername: ['', [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]],
    mobile: ['',[Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.numberpattern)]],
    gender: [''],
    dob: [''],
    accountno:['',[Validators.required,Validators.pattern(this.numberpattern)]],
    bankname:['',[Validators.required,Validators.pattern(this.namepattern),Validators.pattern(this.namepattern)]],
    code:['',[Validators.required]],
    ibanking:['',[Validators.required]],
    preaddress:['',[Validators.maxLength(60)]],
    permaddress:['',[Validators.maxLength(60)]],

  })
  // this.secondFormGroup = this.formBuilder.group({

  //   //sctrl:['',Validators.required]
  //   fullname: ['', [Validators.minLength(6),Validators.maxLength(32),Validators.required,Validators.pattern(this.namepattern)]],
  //   accountno:['',[Validators.required,Validators.pattern(this.numberpattern)]],
  //   bankname:['',[Validators.required,Validators.pattern(this.namepattern),Validators.pattern(this.namepattern)]],
  //   code:['',[Validators.required]],
  //   ibanking:['',[Validators.required]]

  // })
  // this.thirdFormGroup=this.formBuilder.group({

  //   //fttrl:['',Validators.required]
  //   preaddress:['',[Validators.maxLength(60)]],
  //   permaddress:['',[Validators.maxLength(60)]],

  // })    
}
register(){
  this.router.navigate(['/register']);
}

submit(){

  this.s.postData(this.firstFormGroup.value).subscribe();

  //const formData=new FormData();
  //formData.append('firstFormGroup',this.onboardData.get('firstFormGroup')?.value);


  //formData.append('secondFormGroup',this.onboardData.get('secondFormGroup')?.value);
  //this.s.postData(this.secondFormGroup.value).subscribe();
  
  //formData.append('thirdFormGroup',this.onboardData.get('thirdFormGroup')?.value);
  //this.s.postData(this.thirdFormGroup.value).subscribe();



  // return this.s.postData(this.firstFormGroup.value).subscribe();
  // return this.s.postData(this.secondFormGroup.value).subscribe();
  // return this.s.postData(this.thirdFormGroup.value).subscribe();

  // //this.http.post<this.firstFormGroup>();

  // console.log(this.firstFormGroup.value);
  // console.log(this.secondFormGroup);
  // console.log(this.thirdFormGroup);
}
}  

