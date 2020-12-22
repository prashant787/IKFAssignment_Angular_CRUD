import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { UsersComponent } from './pages/users/users.component';
import { UserResolverService } from './services/user-resolver.service';
import { SkillsResolverService } from './services/skills-resolver.service';
// import { resolve } from 'dns';
import { UsersResolverService } from './services/users-resolver.service';
const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    resolve : { usersDataResolved : UsersResolverService }
  },
  {
    path: "user/add/:id",
    component: EditComponent
  },
  {
    path: "user/edit/:id",
    component: EditComponent, 
    resolve : [UserResolverService, SkillsResolverService]
  },
  {
    path: "user/delete/:id",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
