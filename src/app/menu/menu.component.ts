import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Menu';
  }

}
