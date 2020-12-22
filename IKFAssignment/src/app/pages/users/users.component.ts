import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[] = [];
  user : User;
  constructor(private userService : UserService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if(routeParams.id !== undefined){
        this.deleteUser(+routeParams.id);
      }
    });
    this.route.data.subscribe(
      (data : Data) => {
        const d = data['usersDataResolved'];
        for(let val of d){
            this.user = {
              UserId : val["UserId"],
              Name :val["Name"],
              DOB :val["DOB"],
              Designation :val["Designation"],
              Skill :val["Skill"],
            }
            this.users.push(this.user);
        }
        });
  }
  deleteUser(id: number){
    this.userService.onDeleteUser(id);
    setTimeout(() => {
      this.router.navigateByUrl('');
  }, 1000);  
  }
}
