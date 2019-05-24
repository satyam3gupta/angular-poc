import { Component } from '@angular/core';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isChecked: boolean = false;
  constructor(public sharedService: SharedService) {
  }
  onHamburgerMenuClick() {
    this.isChecked = this.isChecked ? false : true;
    this.sharedService.sendMessage(this.isChecked);
  }

}
