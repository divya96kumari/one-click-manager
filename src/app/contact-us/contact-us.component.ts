import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  feedback: any = {
    type: "",
    name: "",
    overallExp: "",
    timelyRes:"",
    support: "",
    description: "",
    review: "",
    rate:""
  }

  feedbackSubmitted = false;
  ngOnInit() {
  }

  submitFeedback(){
    this.feedbackSubmitted = true;
  }
  feedbackAgain(){
    this.feedbackSubmitted = false;
  }

}
