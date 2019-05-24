import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.heading = 'Component';
  }

}
