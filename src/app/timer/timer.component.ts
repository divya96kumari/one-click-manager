import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, timer, range, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    @Input() value: number
    @Output('onComplete') timerOver: EventEmitter<any> = new EventEmitter<any>();
    timerValue;
    areTenSecsRemainings: boolean = false;
    constructor() { }

    ngOnInit() {
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
            // console.log(seconds);
            let mins = parseInt("" + seconds / 60);
            let secs = seconds % 60;
            let hrs = parseInt("" + mins / 60);
            mins = mins % 60;
            let days = parseInt("" + hrs/24);
            hrs = hrs%24;
            let res = {
                'days': days,
                'hours': hrs,
                'minutes': mins,
                'seconds': secs
            }

            this.timerValue = res;
        }, () => this.timerOver.emit('TIMER ERROR'), () => this.timerOver.emit('TIMER OVER'))
    }

}