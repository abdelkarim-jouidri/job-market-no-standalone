import { Component, OnInit } from '@angular/core';
import { JobSeekerService } from '../../_services/jobseeker/job-seeker.service';
import { UserDetailsService } from '../../_services/userdetails/user-details.service';
import { delay, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  roles : any = new UserDetailsService().roles
  isLoading = false
  constructor(
    private userDetailsService : UserDetailsService,
    private router : Router
  ){
    
  }
  ngOnInit(): void {
    
  }

  logout(){
    this.userDetailsService.logout()
    this.router.navigateByUrl("/")
  }

}
