import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8000/api/auth";
  isAuthenticated : boolean = false;
  roles !: any;
  email : any;
  jwt !: string;

  constructor(private http:HttpClient) {
    const token = localStorage.getItem("jwt");
    if(token){
      this.isAuthenticated = true;
      this.jwt = token;
      const decodedJwt : any = jwtDecode(this.jwt);
      this.email = decodedJwt.sub;
      this.roles = decodedJwt.aut;
      console.log("from the nav component : username", this.email)
      console.log("from the nav component : decoded jwt", decodedJwt)
    }
   }

   login(email:string, password:string){
      return this.http.post(this.url+'/login', {"email": email, "password": password});
   }

   register(firstName:string, lastName:string, password:string, role:string, email:string){
      return this.http.post(this.http+'/register', {
        "email":email,
        "firstName":firstName,
        "lastName":lastName,
        "password":password,
        "role":role
      });
   }

   loadUser(response:any){
    this.isAuthenticated = true;
    this.jwt = response['token'];
    let decodedJwt : any = jwtDecode(this.jwt);
    this.email = decodedJwt.username;
    this.roles = decodedJwt.auth;
    localStorage.setItem("jwt", this.jwt);
   }

   logout(){
    this.isAuthenticated = false;
    this.email = undefined;
    this.roles = [];
    this.jwt = '';
    localStorage.removeItem("jwt");

   }
}
