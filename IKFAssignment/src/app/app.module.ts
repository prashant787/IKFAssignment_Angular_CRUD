import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditComponent } from './pages/edit/edit.component';
import { DatePipe } from '@angular/common';
import { SkillsResolverService } from './services/skills-resolver.service';
import { SkillsService } from './services/skills.service';
import { UserResolverService } from './services/user-resolver.service';
import { UserService } from './services/user.service';
import { UsersResolverService } from './services/users-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [DatePipe, SkillsResolverService, SkillsService, UserResolverService, UserService, UsersResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
