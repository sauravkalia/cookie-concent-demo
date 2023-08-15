import { Component, Injector, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  shouldInject = true;
  ccService!: NgcCookieConsentService;

  constructor(
    // private ccService: NgcCookieConsentService
    private injector: Injector
  ) { 
    // ccService.init;
    if(this.shouldInject) {
      this.ccService =  this.injector.get(NgcCookieConsentService);
    }
  }

  ngOnInit(): void {
  }

}
