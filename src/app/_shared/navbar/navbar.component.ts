import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    console.log("is candidate : ", this.isCandidate())
    console.log("is RECRUITER : ", this.isRecruiter())
    console.log(this.role)
  }
  @Input() role : any;

  isCandidate(){
    return this.role.includes("JOBSEEKER");
  }

  isRecruiter(){
    return this.role.includes("RECRUTER");
  }
}
