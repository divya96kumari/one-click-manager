import { Component, OnInit } from '@angular/core';
import { EventDataService } from './event-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-card-overview',
  templateUrl: './custom-card-overview.component.html',
  styleUrls: ['./custom-card-overview.component.css']
})
export class CustomCardOverviewComponent implements OnInit {

  constructor(private service: EventDataService, private route: ActivatedRoute) { }
  custom_event = [];
  id;
  item;

  register = {
    name: '',
    desc: ''
  }

  query = {
    name: '',
    desc: ''
  }
  ngOnInit() {
    this.service.getEventData().subscribe(data => {
      this.custom_event = data;
    });
    console.log('custom data array', this.custom_event);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);
    });
    this.item = this.custom_event[this.id];
    console.log('item', this.item);
  }

}
