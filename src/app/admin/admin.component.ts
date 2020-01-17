import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { User } from '../core/models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private nameField: string;
  private emailField: string;
  private roleField: string;
  private users: User[];

  constructor(
    private userApi:UserServiceService
  ) { }

  ngOnInit() {
  }

  getUsers() {
    this.userApi.getUsers(this.nameField, this.emailField, this.roleField).subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
      
    });
  }

}
