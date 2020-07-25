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
  banner_event = [
    {
      event_id: "be1",
      bg: {
        bgImage: 'assets/hackathon-banner.jpg',
        bgSize: '100%',
        bgPosition: 'center'
  
      },
      htmlCode: `<div style="padding:25px">
      <h1
          style="color: white; font-weight: bolder; font-size: 40px; font-family: Georgia, serif; width:50%; padding: 0px 2px 2px 2px;">
          Hackathon - Women in Action</h1>
      <br>
      <br>
      <h1 style="font-weight: bolder; font-family: Georgia, serif; color:white;"><span style="color: steelblue;">Seamless
              Edge</span><span style="color: red;"> - Core</span><span style="color:yellow"> - Cloud</span></h1>
      <br>
      <div
          style="color: rgb(20, 126, 147); font-size: 16px; background-color: rgba(205, 224, 228, 0.363); width: 50%; padding: 0px 10px 10px 10px; font-weight: bolder;">
          <ul>
              <li>Open to All FTE's</li>
              <li>Max team size - 5</li>
              <li>Women team members mandatory</li>
              <li>Register for more details</li>
          </ul>
      </div>
      <p style="font-weight: bolder; font-size: 20px; color: whitesmoke; margin-left: 10px;">Last date of submission
          10th
          Aug.</p>
  </div>`,
      event_date: "2020-08-10"
    },
    {
      event_id: "be2",
      bg: {
        bgImage: 'assets/foodbg.jpg',
        bgSize: '100% 100%',
        bgPosition: 'center'
  
      },
      htmlCode: `<div style="padding:25px">
      <h1
          style="color: green; font-weight: bolder; font-size: 40px; background-color: rgba(233, 235, 229, 0.725); width:50%; padding: 0px 2px 2px 2px;">
          Progress Made Real - Food for Needy</h1>
      <br>
      <br>
      <div style="background-color: rgba(253, 253, 253, 0.77); width:50%; padding: 0 5px 5px 5px;">
          <h4 style="font-weight: bolder; padding: 0px 10px 10px 10px;">Covid 19 has impacted the foot fall to
              the NGOs and they are in real need of
              your support. You can help by
              online oredering of below listed goods to the either of these two NGO's of your choice.</h4><br>
  
          <div
              style="color: rgb(29, 87, 46); font-size: 16px; width: 50%; padding: 0px 10px 10px 10px; font-weight: bolder;">
              <ul>
                  <li>Omasharm</li>
                  <li>Voice of needy</li>
              </ul>
          </div>
          <p style="font-weight: bolder; font-size: 20px; color: darkolivegreen; margin-left: 10px;">Rice, Oil, Coffee Powder, Broken wheat, Suji, Tea, Daal, Pulses, Papad, Dry
          Cocunut, Jaggery, Channal Daal, Fried Grams, Wheat, Jeera, Green Peas, Moong Daal, Chilly Powder, Black
          Pepper.
          </p>
      </div>
  </div>`,
        
     
      event_date: "2020-07-30"
    },

  {
    event_id: "be3",
    bg: {
      bgImage: 'assets/plant-banner.jpg',
      bgSize: '100% 100%  ',
        bgPosition: 'top'

    },
 
    htmlCode: `<div style="padding:25px;">
    <h1
        style="color: Green; font-weight: bolder; font-family: Georgia, serif; font-size: 40px; width:50%; padding: 0px 2px 2px 2px;">
        Dell Planataion Drive</h1>
    <br>
    <br>
    <div style="color: black; width:50%; padding: 0 5px 5px 5px;">
        <h3 style="color: black; font-family: Georgia, serif; font-weight: bolder;">
            <ul>
                <li>Probable date: 12th and 13th Sep 2020 or 17th & 18th Sep (Will confirm shortly)</li>
                <li>Venue: Bidadi</li>
                <li> Transport: Will be arranged by the NGO partner from Dell 4, Dell5 and Dell6.</li>
                <li>Breakfast & Lunch: Will be provided by the NGO Partner</li>
            </ul>
        </h3>
       
    </div>
</div>`,
    event_date: "2020-08-12"
  },
  {
    event_id: "be1",
    bg: {
      bgImage: 'assets/photography.jpg',
      bgSize: '100%',
        bgPosition: 'center'
    },
    htmlCode: `<div style="padding:25px;">
    <br>
    <br>
    <h1
        style="color: white; font-weight: bolder; font-family: Georgia, serif; font-size: 40px; width:50%; padding: 0px 10px 10px 10px;">
        Nature Photography Contest</h1>
    <br>
    <div style="color: black; width:50%; background-color: rgba(253, 253, 253, 0.37); padding: 0 5px 5px 5px;">
        <h3 style="color: black; font-family: Georgia, serif; font-weight: bolder;">
            Joy in looking and comprehending is nature’s most beautiful gift. – Albert Einstein.
        </h3>
    </div>
    <br>
    <h2 style="color: red; margin-left: 5%;">Coming Soon!!!</h2>
</div>`,

    // event_date: "2020-07-6"
    },]

  ngOnInit() {
  }
}
