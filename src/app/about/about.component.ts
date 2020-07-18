import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 @Output() clicked = new EventEmitter<string>();
  constructor() { }

  dashboardClicked = false;
  faqClicked = false;

  ngOnInit() {
  }

  onDashboard() {
    this.clicked.emit('Dashboard')
  }

  onFaq() {
    this.clicked.emit('FAQ')
  }

}
