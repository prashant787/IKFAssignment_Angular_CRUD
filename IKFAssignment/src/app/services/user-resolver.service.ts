import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {

  constructor(private userService : UserService) { }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
    return this.userService.onGetUser(route.params.id);
  }
}
