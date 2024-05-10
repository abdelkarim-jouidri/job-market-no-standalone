import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetailsService } from '../../_services/userdetails/user-details.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userDetail : UserDetailsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(
      request.url.includes("auth/jobseeker/login") ||
       request.url.includes("auth/recruiter/register") || 
       request.url.includes("auth/recruiter/login") ||
       request.url.includes("auth/jobseeker/register")
      ) 
       return next.handle(request);
      const jwt = this.userDetail.jwt;
      console.log(jwt)
      
       const clonedRequest = request.clone({
        headers : request.headers.set("Authorization", `Bearer ${jwt}`)
      });
      console.log(clonedRequest)
      return next.handle(clonedRequest);
  }
}
