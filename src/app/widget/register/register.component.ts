import { Component, OnInit } from '@angular/core';
import {Register} from '../../models/register.model';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:Register=new Register();
  // registerForm:FormGroup;
  myForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  password:FormControl;
  
  

  hide=true;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
   

    this.firstname=new FormControl('',[Validators.required]);
    this.lastname=new FormControl('',[Validators.required]);
    this.email=new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
    this.password=new FormControl('',[Validators.required]);
   
 
   

    this.myForm=new FormGroup({
      'firstname':this.firstname,
      'lastname':this.lastname,
      'email':this.email,
      'password':this.password,
    
     

    });
  }

  onRegistersubmit()
  {
    alert(this.user.name+''+this.user.email);
  }

  register(){
    console.log("please enter correct details");
  }

}
