import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id;
  item: any;

  openRegister = false;
  openQuery = false;
  openFaq = false;

  register = {
    name: '',
    desc: ''
  }

  success = false;
  QuerySuccess = false;


  events_details = [
    {
      bg: {
        bgImage: 'assets/foodbg.jpg',
        bgSize: '100% 100%',
        bgPosition: 'start'
      },
      title: {
        text: 'Progress Made Real - Food for Needy',
        style: {
          'font-size': '34px',
          'font-weight': 'bolder',
          'margin': '22px',
          'color': 'Green',
          'text-shadow': '2px 2px 4px white',
          'text-align': 'center'
        }
      },
      desc: {
        desc1: {
          text: "Covid 19 has impacted the foot fall to the NGOs and they are in real need of your support. You can help by online oredering of below listed goods to the either of these two BGO's of your choice."
        },
        desc2: {
          text: "-Omasharm provides residential care with full boarding and lodging facility to the old with medical care and nursing care(above 60 years of age)"

        },
        desc3: {
          text: "-Voice of needy foundation Empowering disabled people through Early intervention, skill development and community program."

        },
        desc4: {
          text: "Rice, Oil, Coffee Powder, Broken wheat, Suji, Tea, Daal, Pulses, Papad, Dry Cocunut, Jaggery, Channal Daal, Fried Grams, Wheat, Jeera, Green Peas, Moong Daal, Chilly Powder, Black Pepper",
          style: {
            "color": "#732922",
            "font-weight": "bolder"
          }
        }

      },
      image: {
        image1: {
          bgImage: 'assets/food-bg.jpg',
          bgSize: '100% 100%',
        },
        image2: {
          bgImage: 'assets/food1.jpg',
          bgSize: '100% 100%',
        },
      }
    },
    {
      bg: {
        bgImage: 'assets/hackthon1.jpg',
        bgSize: '100% 113%',
        bgPosition: 'center'
      },
      title: {
        text: 'Hackathon - Women In Action',
        style: {
          'font-size': '35px',
          'font-weight': 'bolder',
          'margin': '23px',
          'color': '#1F35D3',
          'font-family': 'Georgia, serif',
          'text-shadow': '2px 2px 4px white',
          'text-align': 'center'
        }
      },
      desc: {
        desc1: {
          text: "Seamless Edge-Core-Cloud",
          style: {
            'font-size': '35px',
            'font-weight': 'bolder',
            'margin': '23px 23px 23px 0',
            'color': 'black',
            'font-family': 'Georgia, serif',
            'text-shadow': '2px 2px 4px white',
          }
        },
        desc2: {
          text: "The final submission should contain :",
          d1:"1.	Video introducing the team members and explaining the  idea",
          d2:"2. 	Video of the demo or POC",
          d3:"3. Details of the idea and demo in a ppt format"
          

        },
        desc4: {
          text: "Open to All FTE's  •  Max team size (5)  •  Women team members mandatory  •  Register for more details",
           style: {
            "color": "#147E93",
            "font-weight": "bolder"
          }
        },
        desc5: {
          text: "Register your team on or before",
           style: {
            "color": "#147E93",
            "font-weight": "bolder"
          }
        }
      },
      faq: [
        {
          ques: "•	Can you elaborate on what is meant by off-prem and On-prem solutions?",
          ans: " -On prem means standalone solutions. Off prem means cloud centric solutions as in SaaS model."
        },
        {
          ques: "•	Can same member participate in multiple ideas?",
          ans: "- One team member cannot be part of multiple teams."
        },
        {
          ques: "•	Can idea be related to something generic(Non-technical) which can be useful for all the teams?",
          ans: " - Yes, same team member can be part of multiple teams. The idea should be around the theme “Edge-Core-Cloud”, please see the Details page for more information."
        },
        {
          ques: "•	Can male members part of WIA Hackathon?",
          ans: "-	Yes, but if majority are women that adds more weightage."
        }
      ],
      image: {
        image1: {
          bgImage: 'assets/hack1.jpg',
          bgSize: '100% 100%',
        },
        image2: {
          bgImage: 'assets/hack2.jpg',
          bgSize: '100% 100%',
        },
      }
    }
  ]

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);
    });

    this.item = this.events_details[this.id - 1];
    console.log('item', this.item);

  }

}
