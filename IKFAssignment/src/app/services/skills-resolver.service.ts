import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Skill } from '../models/skill.model';
import { SkillsService } from './skills.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsResolverService implements Resolve<any> {

  constructor(private skillService : SkillsService) { }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return this.skillService.onGetSkills();
  }
}
