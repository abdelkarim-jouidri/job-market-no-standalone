import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  url: string = "http://localhost:8000/api/recruiter";
  

  constructor(private http:HttpClient) {
    
   }

   login(email:string, password:string){
      return this.http.post(this.url+'/auth/login', {"email": email, "password": password});
   }

   register( password:string, email:string){
      console.log("from the register method url : "+this.url)
      return this.http.post(this.url+'/auth/register', {
        "email":email,
        "password":password,
      },
      {responseType : "text"});
   }

   
}
