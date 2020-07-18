import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'upcomingEvents', component: UpcomingEventsComponent },
  { path: 'contactUs', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
