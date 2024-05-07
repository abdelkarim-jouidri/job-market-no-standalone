import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JobSeekerService } from '../../../_services/jobseeker/job-seeker.service';
import { RecruiterService } from '../../../_services/recruiter/recruiter.service';
import { UserDetailsService } from '../../../_services/userdetails/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin !: FormGroup
  userType : boolean = false;
  isLoading = false
  errorMsg = ""
  successMsg : any = ""
  constructor(
    private fb:FormBuilder,
    private router : Router,
    private jobSeekerService : JobSeekerService,
    private recruiterService : RecruiterService,
    private userDetailsService : UserDetailsService
  ){

  }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email : this.fb.control(""),
      password : this.fb.control(""),
      checkbox : new FormControl(false)
    })

    this.formLogin.get("checkbox")?.valueChanges.subscribe((value)=>{
      this.userType = value
    })
  }

  handleLogin(){
    this.isLoading = true
    switch(this.isCandidat()){
      case true :
        this.jobSeekerService.
            login(this.formLogin.value.email, this.formLogin.value.password).
            subscribe(
              response   => {
                this.isLoading = false
                this.userDetailsService.loadUser(response)
                this.router.navigateByUrl("/dashboard")
              },
              error=>{
                this.isLoading = false
                this.errorMsg = "Bad credentials"
                console.log(error.message)
              }
            )
          break
      case false :
        this.recruiterService.
            login(this.formLogin.value.email, this.formLogin.value.password).
            subscribe(
              response   => {
                this.isLoading = false
                this.userDetailsService.loadUser(response)
                console.log("from the login , roles = ", this.userDetailsService.roles)
                this.router.navigateByUrl("/dashboard")
              },
              error=>{
                this.isLoading = false
                this.errorMsg = "Bad credentials"
                console.log(error.message)
              }
            )
          break
    }
    
  }

  isCandidat(){
    return this.userType === false ? true : false;
  }

  isUserRecruiter(){
    return !this.isCandidat()
  }
  

}
