import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { FaqComponent } from './faq/faq.component';
import { CustomCardOverviewComponent } from './custom-card-overview/custom-card-overview.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'faq', component: FaqComponent },
  { path: 'dashboard/events/:id', component: EventOverviewComponent },
  { path: 'dashboard/custom-events/:id', component: CustomCardOverviewComponent },
  { path: 'dashboard', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'upcomingEvents', component: UpcomingEventsComponent },
  { path: 'feedback', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
