import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../../DTOs/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string = "http://localhost:8000/api/skills";
  constructor(private http:HttpClient) { }

  loadSkills(){
    return this.http.get<Skill[]>(this.url+'/all')
  }
}
