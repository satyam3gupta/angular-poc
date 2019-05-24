import { Component } from '@angular/core';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isMenuClick: boolean;
  constructor(public sharedService: SharedService) {
    this.sharedService.getMessage().subscribe(isClick => {
      this.isMenuClick = isClick;
    });
  }
}
