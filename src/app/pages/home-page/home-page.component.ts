import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../_services/userdetails/user-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  authenticated !: boolean;
  constructor(private userDetails : UserDetailsService){

  }
  ngOnInit(): void {
    let userDetails = new UserDetailsService();
    this.authenticated = userDetails.isAuthenticated;
  }

}
