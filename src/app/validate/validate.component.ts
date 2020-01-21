import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  public id: number;
  public email: string;
  public oldPassword: number;
  public newPassword1: number;
  public newPassword2: number;

  constructor(
    private userApi: UserServiceService
  ) { }

  ngOnInit() {
  }
  public validateUser(){
   if(this.newPassword1 == this.newPassword2){
    this.userApi.validatePassword(this.id, this.email, this.oldPassword, this.newPassword1)
    //.subscribe(
    //(msg:string)=>
    //)
   }

  
  }
}
