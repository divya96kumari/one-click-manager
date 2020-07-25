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
  activeTemplate = false;

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
      border: {
        style: {
          'border': '2px solid darkolivegreen'
        }
      },
      htmlCode: `<div style="border-radius: 5px; border: 2px solid darkolivegreen; padding:0px 20px 20px 20px;">
      <div>
          <h3 style="font-weight: bolder;">Covid 19 has impacted the foot fall to the NGOs and they are in real need of
              your support. You can help by
              online oredering of below listed goods to the either of these two BGO's of your choice.</h3>
  
          <h4 style="color: coral;">-Omasharm provides residential care with full boarding and lodging facility to the old
              with medical care and nursing care(above 60 years of age)</h4>
          <h4 style="color: coral;">-Voice of needy foundation Empowering disabled people through Early intervention,
              skill development and community program.</h4>
          <div style="background-color: darkolivegreen; border-radius: 5px; margin:5px; padding-left: 1px;">
              <h4 style="color: white;">Rice, Oil, Coffee Powder, Broken wheat, Suji, Tea, Daal, Pulses, Papad, Dry
                  Cocunut, Jaggery, Channal Daal, Fried Grams, Wheat, Jeera, Green Peas, Moong Daal, Chilly Powder, Black
                  Pepper"</h4>
          </div>
          <p style="font-weight: bolder; font-size: 16px;">Last date of Submission 25th July.</p>
      </div>
  </div>`,

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
      htmlCode: `<div style="border-radius: 5px; border: 2px solid rgb(20, 126, 147); padding: 0px 20px 20px 20px;">
      <div>
          <h1 style="font-weight: bolder; font-family: Georgia, serif;
          text-shadow: 2px 2px 4px white;">Seamless Edge-Core-Cloud</h1>
  
          <div style="color: rgb(20, 126, 147); font-size: 16px">
              <ul>
                  <li>Open to All FTE's</li>
                  <li>Max team size - 5</li>
                  <li>Women team members mandatory</li>
                  <li>Register for more details</li>
              </ul>
          </div>
          <h4 style="color:red">Submit your abstract and team details before 30th July</h4>
          <div style="font-size: 16px">
              <h5>The final submission should contain:-</h5>
              <ol>
                  <li>Video introducing the team members and explaining the  idea</li>
                  <li>Video of the demo or POC</li>
                  <li>Details of the idea and demo in a ppt format</li>
              </ol>
          </div>
          <br>
          <div style="font-size: 16px; background-color: aliceblue; padding: 10px; padding-top:1px">
              <h5><b>We are happy to announce the honorable judges for the event:</b></h5>
              <ul>
                  <li><b>Elie Jirej VP, CTO</b></li>
                  <li><b>Jyothi Bandakka DE, CSG</b></li>
                  <li><b>Krishna, Jai (VMware) Director IoT</b></li>
              </ul>
          </div>
          <p style="font-weight: bolder; font-size: 16px;">Last date of submission 10th Aug.</p>
      </div>
  </div>`,

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
    },
    {
      bg: {
        bgImage: 'assets/plantation.jpg',
        bgSize: '100% 134%',
        bgPosition: 'top'
      },
      title: {
        text: 'Dell Plantation Drive @Bidadi',
        style: {
          'font-size': '34px',
          'font-weight': 'bolder',
          'margin': '22px',
          'color': 'Green',
          'text-shadow': '2px 2px 4px white',
          'text-align': 'center'
        }
      },
      htmlCode: `<div style="border-radius: 5px; border: 2px solid darkolivegreen; padding: 0px 20px 20px 20px;">
      <div>
          <h4 style="font-weight: bolder;">The opportunity to welcome FY21 Month 1 – Feb with an exclusive event for the
              Dell-5 Team.
              An opportunity to plant close to 5000 Saplings 1-3 days, probably consecutive 2 days or 3 days with 250+
              team members every day.
          </h4>
          <h4>
              <ul>
                  <li>Probable date: 12th and 13th Aug 2020 or 17th & 18th Aug (Will confirm shortly)</li>
                  <li>Venue: Bidadi</li>
                  <li> Transport: Will be arranged by the NGO partner from Dell 4, Dell5 and Dell6.</li>
                  <li>Breakfast & Lunch: Will be provided by the NGO Partner</li>
              </ul>
          </h4>
          <div style="background-color:rgb(183, 236, 161); padding: 0px 10px 10px 10px;">
              <h4 style="color: red;">The location as shared is as follows:</h4>
  
              <h6 style="font-size: 16px; margin-top: 5px;">IRIDM Bengaluru, Bengaluru, Karnataka 560074
                  https://maps.app.goo.gl/Uhn43xjhPGcuF7Xq6 <br>
  
              </h6>
          </div>
          <h5>It is on the Mysore Road @ Bidadi to plant 5k Saplings. Please vote for your participation and watch this space for more details.</h5>
  
      </div>
  </div>`,

      image: {
        image1: {
          bgImage: 'assets/plantdrive2.jpg',
          bgSize: '100% 100%',
        },
        image2: {
          bgImage: 'assets/plantdrive3.jpg',
          bgSize: '100% 100%',
        },
      }
    },
    {
      bg: {
        bgImage: 'assets/diya-banner.jpg',
        bgSize: '100% 100%',
        bgPosition: 'top'
      },
      title: {
        text: 'Diya Painting - Alfaa Charity (ALFAA)',
        style: {
          'font-size': '34px',
          'font-weight': 'bolder',
          'margin': '22px',
          'color': 'red',
          'text-shadow': '2px 2px 4px white',
          'text-align': 'center'
        }
      },
      htmlCode: `<div style="border-radius: 5px; border: 2px solid rgba(255, 0, 0, 0.479); padding: 0px 20px 20px 20px;">
      <div>
          <h3 style="font-weight: bolder;">Diya painting this festive season for a cause!!!</h3>
  
          <h4>There is the season where we can paint diya’s and help the Charity to raise funds for a cause.
              We will be helping the <b>Alfaa Charity - ALFAA</b> is Assisted Living for Autistic Adults. </h4>
  
          <div style="background-color:rgb(247, 247, 185); border-radius: 5px; margin:5px; padding: 0px 10px 10px 10px;">
              <h4>-The primary objective of ALFAA was to create good quality living conditions and related facilities for
                  adults with Autism in India.</h4>
              <h4> -They will raise funds by selling the diyas. Let’s come together and do our best to help the charity.
              </h4>
          </div>
  
          <h4>Date: 9th and 10th September</h4>
          <h4>Location: Srinagar Conference Room</h4>
          <h4>Time: 11 AM onwards</h4>
  
          <p style="font-weight: bolder; font-size: 16px; color: red;">Last date of registration 30th Aug.</p>
      </div>
  </div>`,

      image: {
        image1: {
          bgImage: 'assets/diya1.jpg',
          bgSize: '100% 100%',
        },
        image2: {
          bgImage: 'assets/diya2.jpg',
          bgSize: '100% 100%',
        },
      }
    },
  ]

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('id', this.id);
    });

    this.item = this.events_details[this.id - 1];
    console.log('item', this.item);

    if (this.item) {
      this.activeTemplate = false;
      console.log('template', this.activeTemplate);
    } else {
      this.activeTemplate = true;
      console.log('template', this.activeTemplate);
    }

  }

}
