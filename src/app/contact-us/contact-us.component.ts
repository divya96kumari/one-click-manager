import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  customEvent: any = {
    type: "",
    name: "",
    overallExp: "",
    timelyRes:"",
    support: "",
    description: "",
    review: ""
  }
  ngOnInit() {
  }

}
