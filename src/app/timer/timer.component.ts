import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, timer, range, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    @Input() eventDate: string;
    @Output('onComplete') timerOver: EventEmitter<any> = new EventEmitter<any>();
    timerValue = {
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
    };
    areTenSecsRemainings: boolean = false;
    constructor() { }
    value;

    ngOnInit() {

        this.value = this.convertDateIntoSec();

        let source$ = zip(
            range(0, this.value),
            timer(0, 1000),
            (x) => { return x; }
        ).pipe(
            map(x => {
                return this.value - x;
            })
        );


        source$.subscribe(seconds => {
            // console.log('sec', seconds);
            let mins = parseInt("" + seconds / 60);
            let secs = seconds % 60;
            let hrs = parseInt("" + mins / 60);
            mins = mins % 60;
            let days = parseInt("" + hrs / 24);
            hrs = hrs % 24;
            let res = {
                'days': days,
                'hours': hrs,
                'minutes': mins,
                'seconds': secs
            }

            this.timerValue = res;
        }, () => this.timerOver.emit('TIMER ERROR'), () => this.timerOver.emit('TIMER OVER'))
    }

    convertDateIntoSec() {
        let time_left;
        if (this.eventDate) {
            let date = new Date(this.eventDate);
            let today_date = new Date();
            time_left = Math.floor((date.getTime() - today_date.getTime()) / 1000);
        }

        if (time_left <= 0) {
            time_left = 0;
        }
        // console.log("time", time_left);
        return time_left;

    }

}