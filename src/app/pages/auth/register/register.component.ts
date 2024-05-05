import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  userType : boolean = false;
  isLoading = false;
  registerForm !: FormGroup

  constructor(
    private fb : FormBuilder,
    private router : Router
  ){

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname: [''], 
      lname: [''], 
      email: [''], 
      password: [''], 
      checkbox : new FormControl(false)
    });

    this.registerForm.get("checkbox")?.valueChanges.subscribe((value)=>{
      this.userType = value
    })
    
    this.isCandidat()
    this.isUserRecruiter()


  }
  
  onUserTypeChange(){
    let userTypeString = this.userType === false ? "Candidat" : "Recruteur";
    console.log("the value of the user type is :")
    console.log(userTypeString)
  }



  isCandidat(){
    return this.userType === false ? true : false;
  }

  isUserRecruiter(){
    return !this.isCandidat()
  }
  
  handleRegister(){
    
  }

}
