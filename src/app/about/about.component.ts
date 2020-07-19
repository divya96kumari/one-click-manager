import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 @Output() clicked = new EventEmitter<string>();
 @Output() logged = new EventEmitter<boolean>();

  constructor() { }

  dashboardClicked = false;
  faqClicked = false;

  ngOnInit() {
  }

  onDashboard() {
    this.logged.emit(true)
    this.clicked.emit('Dashboard')
  }

  onFaq() {
    this.logged.emit(true)
    this.clicked.emit('FAQ')
  }

}
