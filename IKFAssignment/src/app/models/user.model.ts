import {Skill} from './skill.model';

export class User {
    public UserId : number;
    public Name : string;
    public DOB : Date;
    public Designation : string;
    public Skill : string | any;
}