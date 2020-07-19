import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
 
  events = [{
    id: '1',
    bg: {
      bgImage: 'assets/csr-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [
      {
        text: 'Progress Made Real - Food for Needy',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '8px',
          'color': 'Green',
          'text-shadow': '2px 2px 4px white',
          'text-align': 'center'
        }
      },
      {
        text: '-Omasharam',
        style: {
          'font-size': '20px',
          'font-family': 'Georgia, serif',
          'margin': '5px',
          'top': '110px',
          'left': '40px',
          'color': 'black',
          'font-weight': 'bold',
          'text-shadow': '2px 2px 3px white'
        }
      },
      {
        text: '-Voice of needy',
        style: {
          'font-size': '20px',
          'font-family': 'Georgia, serif',
          'margin': '5px',
          'top': '140px',
          'left': '40px',
          'color': 'black',
          'font-weight': 'bold',
          'text-shadow': '2px 2px 3px white'
        }
      },
      {
        text: 'Last day 30th June',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '80%',
          'left': '41px',
          'color': 'white',
          'text-shadow': '2px 2px 4px #000000'
        }
      }
    ]
  }, {
    id: '2',
    bg: {
      bgImage: 'assets/blue-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [
      {
        text: 'Women in Action',
        style: {
          'font-size': '20px',
          'margin': '5px',
          'font-weight': 'bold',
          'top': '7px',
          'left': '15%',
          'color': 'Blue',
          'text-shadow': '2px 2px 4px white',
          'background': 'azure',
          'padding': '2px',
          'font-family': 'Georgia, serif'
        }
      },
      {
        text: 'Hackathon',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '45px',
          'left': '25%',
          'color': 'white',
          'text-shadow': '2px 2px 4px #000000'
        }
      },

      {
        text: 'Seamless Edge - Core - Cloud',
        style: {
          'font-size': '30px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '100px',
          'left': '5px',
          'color': 'black',
          'text-shadow': '2px 2px 2px white',
          'font-family': 'Georgia, serif'
        }
      },
      {
        text: 'Register your team on or before 5th July',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '78%',
          'color': 'white',
          'text-align': 'center'
        }
      }
    ]
  }];

  later_events = [{
    id: 'le-1',
    bg: {
      bgImage: 'assets/green-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [
      {
        text: 'Nature Photography Contest',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'font-family': 'Georgia, serif',
          'margin': '5px',
          'top': '8px',
          'color': 'white',
          'text-shadow': '2px 2px 4px black',
          'text-align': 'center'
        }
      },
      {
        text: 'Register Now',
        style: {
          'font-size': '18px',
          'font-family': 'Georgia, serif',
          'margin': '5px',
          'top': '120px',
          'left': '59px',
          'color': 'black',
          'font-weight': 'bold',
          'text-shadow': '2px 2px 3px white'
        }
      },
      {
        text: 'Portal Open till',
        style: {
          'font-size': '16px',
          'font-family': 'Georgia, serif',
          'margin': '5px',
          'top': '70%',
          'left': '55px',
          'color': 'black',
          'font-weight': 'bold',
        }
      },
      {
        text: '30th June',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '80%',
          'left': '78px',
          'color': 'black',
        }
      }
    ]
  }, {
    id: 'le-2',
    bg: {
      bgImage: 'assets/outing-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [
      {
        text: 'Quaterly Outing',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'margin': '5px',
          'left': '10%',
          'top': '35px',
          'text-align': 'center',
          'color': 'Red',
        }
      },

      {
        text: 'Venue - Palm Meadows Resort ',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '120px',
          'left': '5px',
          'color': 'black',
          'text-align': 'center',
          'text-shadow': '2px 2px 4px white',
          'font-family': 'Georgia, serif'
        }
      },
      {
        text: 'Date - 10th July',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '80%',
          'color': 'blue',
          'left': '26%',
          'text-align': 'center'
        }
      }
    ]
  },
  {
    id: 'le-3',
    bg: {
      bgImage: 'assets/technical1-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [
      {
        text: 'Women in Action',
        style: {
          'font-size': '20px',
          'margin': '5px',
          'font-weight': 'bold',
          'top': '7px',
          'left': '15%',
          'color': 'azure',
          'background': 'steelblue',
          'font-family': 'Georgia, serif',
          'padding': '2px'
        }
      },
      {
        text: 'Lessons in Leadership',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '55px',
          'left': '3%',
          'text-align': 'center',
          'color': 'white',
          'text-shadow': '2px 2px 4px #000000',
          'font-family': 'Georgia, serif'
        }
      },

      {
        text: '- Sudha KV serves as Vice President – Development Engineering',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '120px',
          'left': '5px',
          'color': 'black',
          'text-align': 'center',
          'text-shadow': '2px 2px 4px white',
          'font-family': 'Georgia, serif'
        }
      },
      {
        text: 'Date - 10th July',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '80%',
          'color': 'blue',
          'left': '26%',
          'text-align': 'center'
        }
      }
    ],

  },
  {
    id: 'le-4',
    bg: {
      bgImage: 'assets/sports-card.jpg',
      bgSize: '100% 100%',
      bgPosition: 'center'
    },
    event: [

      {
        text: 'Volleyball Tournament',
        style: {
          'font-size': '24px',
          'font-weight': 'bolder',
          'margin': '5px',
          'left': '3%',
          'top': '35px',
          'text-align': 'center',
          'color': 'White',
          'text-shadow': '2px 2px 4px #000000',
        }
      },

      {
        text: 'Venue - Volleyball court (Dell 5) ',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '120px',
          'left': '5px',
          'color': 'black',
          'text-align': 'center',
          'text-shadow': '2px 2px 4px white',
          'font-family': 'Georgia, serif'
        }
      },
      {
        text: 'Nomination open!!!',
        style: {
          'font-size': '16px',
          'font-weight': 'bolder',
          'margin': '5px',
          'top': '80%',
          'color': 'red',
          'left': '20%',
          'text-align': 'center'
        }
      }
    ]
  },];

  custom_events = [];
  eventForm;

  customEvent: any = {
    type: "",
    name: "",
    venue: "",
    startDate: "",
    endDate: "",
    description: ""
  }

  constructor() { }

  ngOnInit() {
  }

  openEventForm() {
    this.eventForm = true;
  }

  createCustomEvent() {
    this.eventForm = false;
    let newCustomEventObj = { ...this.customEvent };
    this.customEvent = {
      type: "",
      name: "",
      venue: "",
      startDate: "",
      endDate: "",
      description: ""
    };

    let options = {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    };
    let endDate = new Date(newCustomEventObj.endDate).toLocaleDateString('en-us', options);
    console.log('endDate', endDate);

    if (newCustomEventObj) {

      let bgImageCard = "";
      let fontColor = "";
      let venueColor = "";
      let dateColor = "";
      if (newCustomEventObj.type === "csr") {
        bgImageCard = "assets/csr-card.jpg";
        fontColor = "black";
        venueColor = "white";
        dateColor = "black";
      } else if (newCustomEventObj.type === "technical") {
        bgImageCard = "assets/technical1-card.jpg";
        fontColor = "black";
        venueColor = "white";
        dateColor = "black";
      } else if (newCustomEventObj.type === "hackathon") {
        bgImageCard = "assets/blue-card.jpg";
        fontColor = "white";
        venueColor = "black";
        dateColor = "white";
      } else if (newCustomEventObj.type === "sport") {
        bgImageCard = "assets/sports-card.jpg";
        fontColor = "white";
        venueColor = "black";
        dateColor = "white";
      } else if (newCustomEventObj.type === "festival") {
        bgImageCard = "assets/festival-card.jpg";
        fontColor = "white";
        venueColor = "black";
        dateColor = "white";
      } else if (newCustomEventObj.type === "outing") {
        bgImageCard = "assets/outing-card.jpg";
        fontColor = "blue";
        venueColor = "white";
        dateColor = "black";
      } else if (newCustomEventObj.type === "celebration") {
        bgImageCard = "assets/celebration.jpg";
        fontColor = "Black";
        venueColor = "white";
        dateColor = "Black";
      }

      console.log('Image', bgImageCard);
      let createEvent = {
        bg: {
          bgImage: bgImageCard,
          bgSize: '100% 100%',
          bgPosition: 'center'
        },
        event: [
          {
            text: newCustomEventObj.name,
            style: {
              'font-size': '24px',
              'font-weight': 'bolder',
              'font-family': 'Georgia, serif',
              'top': '20px',
              'color': fontColor,
              'text-shadow': '2px 2px 4px ' + venueColor,
              'text-align': 'center',
              'width': '100%'
            }
          },
          {
            text: "Venue - " + newCustomEventObj.venue,
            style: {
              'font-size': '18px',
              'font-family': 'Georgia, serif',
              'top': '120px',
              'color': venueColor,
              'font-weight': 'bold',
              'width': '100%',
              'text-align': 'center',
              'text-shadow': '2px 2px 3px ' + dateColor,
            }
          },
          {
            text: "Last Date :-" + endDate,
            style: {
              'font-size': '16px',
              'font-weight': 'bolder',
              'top': '80%',
              'color': dateColor,
              'width': '100%',
              'text-align': 'center',
              'text-shadow': '2px 2px 3px ' + venueColor
            }
          }
        ]
      }
      this.custom_events.push(createEvent);
    }
    console.log("custom event", this.custom_events);
  }
}
