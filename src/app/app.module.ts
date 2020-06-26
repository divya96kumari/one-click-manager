import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import {TimerComponent} from './timer/timer.component';
import { BannerComponent } from './banner/banner.component'

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UpcomingEventsComponent,
    AboutComponent,
    ContactUsComponent,
    TimerComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    CountdownTimerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
