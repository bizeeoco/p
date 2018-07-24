import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  myForm:FormGroup;

  email:FormControl;
  constructor() { }

  ngOnInit() {
    
    this.email=new FormControl('',[Validators.required]);
   
   
 
   

    this.myForm=new FormGroup({
      
      'email':this.email,
    
    
     

    });
  }

}
