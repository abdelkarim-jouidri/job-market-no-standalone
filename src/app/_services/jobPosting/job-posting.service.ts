import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor(private http : HttpClient) { }

  url: string = "http://localhost:8000/api/jobs";

  storeJobPosting(description:string, title : string, contractType:any, skills:any){
    console.log("from the store method")
    return this.http.post(this.url, {
      "description": description,
    "title": title,
    "contractType": contractType,
    "skills": skills  
    } , {headers: {skip: 'true'}})
  }
}
