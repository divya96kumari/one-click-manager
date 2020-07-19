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
import { TimerComponent } from './timer/timer.component';
import { BannerComponent } from './banner/banner.component';
import { FaqComponent } from './faq/faq.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { EventOverviewComponent } from './event-overview/event-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    UpcomingEventsComponent,
    AboutComponent,
    ContactUsComponent,
    TimerComponent,
    BannerComponent,
    FaqComponent,
    EventOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    CountdownTimerModule,
    BrowserAnimationsModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
