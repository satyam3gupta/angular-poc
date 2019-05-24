import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Maps';
  }

}
