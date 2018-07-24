import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  myForm:FormGroup;
  firstname:FormControl;
  lastname:FormControl;
  email:FormControl;
  phone:FormControl;

  constructor() { }

  ngOnInit() {
    
    this.firstname=new FormControl('',[Validators.required]);
    this.lastname=new FormControl('',[Validators.required]);
    this.email=new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
    this.phone=new FormControl('');

    this.myForm=new FormGroup({
      'firstname':this.firstname,
      'lastname':this.lastname,
      'email':this.email,
      'phone':this.phone
      
    
     

    });  
  }

}
