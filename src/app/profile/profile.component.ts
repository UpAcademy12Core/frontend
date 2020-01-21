import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from '../core/models/user';
import { UserServiceService } from '../core/services/user-service/user-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  modalRef: BsModalRef;
  private user: User;
  private currentPassword: string;
  private newPassword1: string;
  private newPassword2: string;


  constructor(
    private userApi: UserServiceService,
    private modalService: BsModalService,
  ) {
    this.user = this.userApi.getCurrentUser();
  }

  ngOnInit() {
  }

  public updateUser() {
    this.userApi.updateUser(this.user).subscribe(
      (msg: string) => {
        console.log(msg);
      },(error: string) => {
        console.log(error);
      });
  }

  public updatePassword() {
    console.log("Updating Password:");
    console.log("Current password: " + this.currentPassword + ", New Password1: " + this.newPassword1 + ", New Password2: " + this.newPassword2);
    if (this.newPassword1 === this.newPassword2) {
      this.userApi.updatePassword(this.currentPassword, this.newPassword2).subscribe(
        (msg: string) => {
          console.log(msg);
        },(error: string) => {
          console.log(error);
        });
    } else {
      console.log("A password digitada no campo 3 é diferente da digitada no campo 2");
    }
    this.currentPassword = "";
    this.newPassword1 = "";
    this.newPassword2 = "";
    this.modalRef.hide();
  }

  openModalUpdatePassword(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
