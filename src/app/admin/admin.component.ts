import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { User } from '../core/models/user';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  modalRef: BsModalRef;
  private nameField: string;
  private emailField: string;
  private roleField: string;
  private users: User[];
  private user: User = new User();

  constructor(
    private userApi:UserServiceService,
    private modalService: BsModalService,
    //private modalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

  getUsers() {
    this.userApi.getUsers(this.nameField, this.emailField, this.roleField).subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    });
  }

  public createUser() {
    
    
    this.userApi.createUser(this.user);
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
