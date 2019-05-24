import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html'
})
export class AppsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Apps';
  }

}
