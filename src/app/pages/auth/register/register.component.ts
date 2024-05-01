import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  userType : boolean = false;

  ngOnInit(): void {
    
    this.isCandidat()
    this.isUserRecruiter()
    console.log("inside on initi" , "the value of checkbox is :")
    console.log(this.userType)

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
  

}
