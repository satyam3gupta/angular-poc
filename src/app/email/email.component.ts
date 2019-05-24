import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Email';
  }

}
