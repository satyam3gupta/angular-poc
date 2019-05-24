import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isMenuClick: boolean;
  constructor(public sharedService: SharedService) {
    this.sharedService.getMessage().subscribe(isClick => {
      this.isMenuClick = isClick;
    });

  }
  ngOnInit() {
    this.sharedService.heading = 'Dashboard';
  }

}
