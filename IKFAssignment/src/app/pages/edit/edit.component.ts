import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill.model';
import { User } from 'src/app/models/user.model';
import { SkillsService } from 'src/app/services/skills.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  id : number;
  userDOB : string | null = null;
  user : User;
  header : string;
  skills: Skill[] = [];
  skill : Skill;
  
  constructor(private router : Router, private route : ActivatedRoute, private skillsService : SkillsService, private userService : UserService, public datepipe: DatePipe) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.skillsService.onGetSkills().subscribe(
        responseData => {
          Object.entries(responseData).forEach(([key, value]) => {
            this.skill = {
            SkillName : value["SkillName"]
          };
          this.skills.push(this.skill);
          });
        }
      );
      this.updateHeader(+routeParams.id);
      this.updateUser();
    });
  }

  updateHeader(id:number){
    this.id = id;
    this.header = this.id === 0 ? 'Add User' : 'Edit User';
  }

  updateUser(){
    if(this.id !== 0){
      this.userService.onGetUser(this.id).subscribe(
        data => {
          this.user = data;
          this.userDOB = this.datepipe.transform(this.user.DOB, 'yyyy-MM-dd');
        }
      );  
    }
    else {
      this.user = {
        UserId : 0,
        Name : "",
        DOB : new Date(),
        Designation : "",
        Skill : ""
      }
      this.userDOB = null;
    }    
  }

  onSubmit(form : NgForm){
    if(this.id === 0){
      this.user = {
        UserId : 0,
        Name: form.value["Name"],
        DOB: form.value["DOB"],
        Designation: form.value["Designation"],
        Skill: form.value["Skill"]
      }
      this.userService.onAddUser(this.user);
    }
    else {

      this.userService.onEditUser(this.id, this.user);
    }
    setTimeout(() => {
      this.router.navigateByUrl('');
  }, 1000);    
  }

  DateChange(e: string) {
    this.user.DOB = new Date(e);
    console.log(this.user);
  }

}
