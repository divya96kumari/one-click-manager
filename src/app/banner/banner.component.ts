import { Component, OnInit } from '@angular/core';
import { inOutAnimation} from './animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    inOutAnimation
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  countArray=[{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1},{id:1}]

  time_left: number;
  banner_event = [{
    event_id: "be1",
    bg: {
      bgImage: 'assets/photography.jpg'
    },
    event_name: {
      title: "Nature photography contest",
      style: {
        'left': '72px',
        'font-size': '1.6rem',
        'font-weight': 'bolder',
        'text-align': 'center',
        'top': '20%',
        'position': 'absolute',
        'color': 'white',
        'text-shadow': '2px 2px 4px #000000',
        'font-family': 'Georgia, serif'
      }
    },
    event_description: {
      title: `Event template is a modernistic tool for almost any product based website. Of course, it aims
    towards events of all kinds. It is a flat Bootstrap template, fully responsive, which was designed using
    HTML5 and CSS3. If you need a contemporary template with great features to promote your application, However, you
    can still perform tweaks and improvements until you fully fine-tune The Conference to follow your needs
    precisely.`,
      style: {
        'font-size': '16px',
        'color': 'white',
        'margin': '40px',
        'text-align': 'center',
        'position': 'absolute',
        'top': '152px',
        'text-shadow': '2px 1px 2px #000000',
      }
    },

    event_details: {
      title: "Upload your photos till 30th july",
      style: {
        'font-size': '1rem',
        'font-weight': 'bolder',
        'color': 'white',
        'top': '70%',
        'left': '78px',
        'float': 'right',
        'position': 'absolute',
        'text-shadow': '2px 2px 4px #000000'
      }
    },

    event_date: "2020-07-6"
  },
  {
    event_id: "be2",
    bg: {
      bgImage: 'assets/hackathon-banner.jpg'

    },
    event_name: {
      title: "Hackathon - Women in Action",
      style: {
        'left': '72px',
        'font-size': '1.6rem',
        'font-weight': 'bolder',
        'text-align': 'center',
        'top': '20%',
        'position': 'absolute',
        'color': 'white',
        'text-shadow': '2px 2px 4px #000000',
        'font-family': 'Georgia, serif'
      }
    },
    event_description: {
      title: `Event template is a modernistic tool for almost any product based website. Of course, it aims
    towards events of all kinds. It is a flat Bootstrap template, fully responsive, which was designed using
    HTML5 and CSS3. If you need a contemporary template with great features to promote your application, However, you
    can still perform tweaks and improvements until you fully fine-tune The Conference to follow your needs
    precisely.`,
      style: {
        'font-size': '16px',
        'color': 'white',
        'margin': '40px',
        'text-align': 'center',
        'position': 'absolute',
        'top': '152px',
        'text-shadow': '2px 1px 2px #000000',
      }
    },

    event_details: {
      title: "Upload your photos till 20th july",
      style: {
        'font-size': '1rem',
        'font-weight': 'bolder',
        'color': 'white',
        'top': '70%',
        'left': '78px',
        'float': 'right',
        'position': 'absolute',
        'text-shadow': '2px 2px 4px #000000'
      }
    },

    event_date: "2020-07-20"
  },
  {
    event_id: "be3",
    bg: {
      bgImage: 'assets/event.jpg'

    },
    event_name: {
      title: "Dell Annual Day",
      style: {
        'left': '72px',
        'font-size': '1.6rem',
        'font-weight': 'bolder',
        'text-align': 'center',
        'top': '20%',
        'position': 'absolute',
        'color': 'white',
        'text-shadow': '2px 2px 4px #000000',
        'font-family': 'Georgia, serif'
      }
    },
    event_description: {
      title: `Event template is a modernistic tool for almost any product based website. Of course, it aims
    towards events of all kinds. It is a flat Bootstrap template, fully responsive, which was designed using
    HTML5 and CSS3. If you need a contemporary template with great features to promote your application, However, you
    can still perform tweaks and improvements until you fully fine-tune The Conference to follow your needs
    precisely.`,
      style: {
        'font-size': '16px',
        'color': 'white',
        'margin': '40px',
        'text-align': 'center',
        'position': 'absolute',
        'top': '152px',
        'text-shadow': '2px 1px 2px #000000',
      }
    },

    event_details: {
      title: "Upload your photos till 25th july",
      style: {
        'font-size': '1rem',
        'font-weight': 'bolder',
        'color': 'white',
        'top': '70%',
        'left': '78px',
        'float': 'right',
        'position': 'absolute',
        'text-shadow': '2px 2px 4px #000000'
      }
    },

    event_date: "2020-07-25"
  }]

  ngOnInit() {
  }
}
