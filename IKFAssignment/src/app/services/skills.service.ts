import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills : Skill[] = [];
  skill: Skill;
  constructor(private http : HttpClient) { }

  onGetSkills(){
    // this.skills = [];
    return this.http.get('https://localhost:44360/api/Skills/').pipe(map(data=> {
      return data;
    }), tap(data => {  }))
  }


  // onGetSkills() {
  //   this.skills = [];
  //   this.http.get('https://localhost:44360/api/Skills/')
  //   .subscribe(responseData => {
  //     Object.entries(responseData).forEach(([key, value]) => {
  //       this.skill = {
  //           SkillName : value["SkillName"]
  //         };
  //         this.skills.push(this.skill);
  //     });
  //   });
  //   return this.skills;
  // }

}
