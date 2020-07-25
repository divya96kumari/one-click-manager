import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  eventData = [];
  constructor() { }

  getEventData(): Observable<any> {
    return of(this.eventData);
  }

  setEventData(data) {
    this.eventData = data;
  }
}
