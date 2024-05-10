import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { AuthService } from '../../../_services/auth/auth.service';
import { JobSeekerService } from '../../../_services/jobseeker/job-seeker.service';
import { RecruiterService } from '../../../_services/recruiter/recruiter.service';

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
  successMsg : string = ""

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private jobSeekerService : JobSeekerService,
    private recruiterService : RecruiterService
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
                            
                              this.successMsg = response
                              this.registerForm.reset()
                              this.registerForm.get("checkbox")?.setValue(false)
                              this.isLoading = false
                                },
                              error=>{
                              
                                this.isLoading = false
                                this.errorMsg = error.error

                              })
        break
      case false :
      
        this.recruiterService.
                          register(
                            this.registerForm.value.password,
                            this.registerForm.value.email).
                          subscribe(response=>{
                            
                              this.successMsg = response
                              this.registerForm.reset()
                              this.registerForm.get("checkbox")?.setValue(true)
                              this.isLoading = false
                                },
                              error=>{
                              
                                this.isLoading = false
                                this.errorMsg = error.error

                              })

    }
    
  }

}
