import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../core/services/user-service/user-service.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }


}
