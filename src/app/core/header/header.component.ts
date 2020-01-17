import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;
  constructor(
    private userService: UserServiceService
  ) {
    this.name = this.userService.getCurrentName();
  }

  ngOnInit() {
  }

}
