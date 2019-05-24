import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Pages';
  }

}
