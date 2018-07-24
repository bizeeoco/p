import { Component, OnInit } from '@angular/core';
// import {Login} from '../../models/login.module';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  myForm:FormGroup;
  user_name:FormControl;
  pass_word:FormControl;
 

  private username;
	private password;
 
	// login():void{
	// 	if(this.username == "test" && this.password == "test"){
	// 		alert("succesfully logged in");
	// 	}
	// 	else {
	// 		alert("Give username and password 'test'");
	// 	}
  // }
  
 

  // user:Login=new Login();
  // loginForm:FormGroup;
  // hide=true;
  constructor(private formBuilder:FormBuilder,private auth:AuthService,private myRoute: Router) { }

  ngOnInit() {
    // this.loginForm=this.formBuilder.group({
    //   'email':[this.user.email,[Validators.required]],
    //   'password':[this.user.password,[Validators.required,Validators.minLength(6),
    //   Validators.maxLength(15)]]
    // });
    this.user_name=new FormControl('',[Validators.required]);
    this.pass_word=new FormControl('',[Validators.required]);
   

    this.myForm=new FormGroup({
      'user_name':this.user_name,
      'pass_word':this.pass_word,

    });
    
  }
  //  logins(){
  //    console.log("form is submitted");
  //  }
  //  login() {
  //   if (this.myForm.valid) {
  //     this.auth.sendToken(this.myForm.value.user_name)
  //     this.myRoute.navigate(["home"]);
  //   }
  // }
  
  // onLoginsubmit()
  // {
  //   alert(this.user.email);
  // }
userLogin =new Login('sachin','sachin143');

login(){
   this.auth.enroll(this.userLogin)
   .subscribe(
     data=>console.log('success',data),
     error=>console.error('Error',error)
     
   )
  
}
  

}
