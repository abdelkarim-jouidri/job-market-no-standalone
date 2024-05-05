import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { AuthService } from '../../../_services/auth/auth.service';
import { JobSeekerService } from '../../../_services/jobseeker/job-seeker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  userType : boolean = false;
  isLoading = false;
  registerForm !: FormGroup
  errorMsg : string = ""

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private jobSeekerService : JobSeekerService
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
    this.isLoading = true
    switch(this.isCandidat()) {
      case true :
        let registerform = this.registerForm.value
        this.jobSeekerService.
                          register(registerform.fname,
                                  registerform.lname,
                                  registerform.password,
                                  registerform.email).
                          subscribe(response=>{
                            this.isLoading = false
                              console.log("response from the register")
                              console.log(response)
                                },
                              error=>{
                              console.log("error from the register")
                              console.log(error.message)
                                this.isLoading = false
                                this.errorMsg = error.error

                              })
        break
      case false :
        console.log("this is the recruiter case")

    }
    
  }

}
