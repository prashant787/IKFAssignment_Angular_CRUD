import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users : User[] = [];
  user : User;



  constructor(private http : HttpClient, private router : Router) { }


  onGetUsers() {
    return this.http.get<User[]>('https://localhost:44360/api/Users/').pipe(map(data => {  
    return data
    }), tap( data => {
    }))
  }



  onGetUser(id : number) {
    return this.http.get<User>('https://localhost:44360/api/Users/' + id).pipe(map(data => {  
    return {
        UserId : data.UserId,
        Name : data.Name,
        DOB : data.DOB,
        Designation : data.Designation,
        Skill : data.Skill
      };
    }), tap( data => {
    }))
  }


  onAddUser(user : User){
    this.http.post('https://localhost:44360/api/Users/', user)
    .subscribe(resposeData => {
    });
  }

  onEditUser(id:number, user : User) {
    this.http.put('https://localhost:44360/api/Users/' + id, user)
    .subscribe(resposeData => {
    });
  }

  onDeleteUser(id : number){
    this.http.delete('https://localhost:44360/api/Users/' + id)
    .subscribe(resposeData => {
    });
  }

}
