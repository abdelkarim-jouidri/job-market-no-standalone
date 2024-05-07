import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  isAuthenticated : boolean = false;
  roles !: any;
  email : any;
  jwt !: string;
  constructor() { 
    const token = localStorage.getItem("jwt");
    if(token){
      this.isAuthenticated = true;
      this.jwt = token;
      const decodedJwt : any = jwtDecode(this.jwt);
      this.email = decodedJwt.sub;
      this.roles = decodedJwt.aut;
    }
  }

  loadUser(response:any){
    this.isAuthenticated = true;
    this.jwt = response['token'];
    let decodedJwt : any = jwtDecode(this.jwt);
    this.email = decodedJwt.username;
    this.roles = decodedJwt.auth;
    localStorage.setItem("jwt", this.jwt);
    console.log("from the service , decoded jwt autj = ", decodedJwt.auth)

   }

   logout(){
    this.isAuthenticated = false;
    this.email = undefined;
    this.roles = [];
    this.jwt = '';
    localStorage.removeItem("jwt");

   }
}
