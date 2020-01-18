import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public name: string;
  public showAdminTab: boolean = false;

  constructor(
    private userApi: UserServiceService
  ) {
    this.name = this.userApi.getCurrentName();
    if (this.userApi.isAdmin()) {
      this.showAdminTab = true;
    }
  }

  ngOnInit() {
  }



}
