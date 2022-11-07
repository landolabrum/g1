import React from "react";
import Slider from "../components/slider/slider";
import s1 from "../assets/images/backgrounds/banner_1.png"
import s2 from "../assets/images/backgrounds/banner_2.png"
import s3 from "../assets/images/backgrounds/banner_3.png"
import tom from '../assets/images/slider_tom_ridge.png';

import { Card  } from "react-bootstrap";
const slideItems = [
  {id: 1, img:s1, title:'Detection', body: 'Guardian One employs video and AI technology to provide immediate detection'},
  {id: 2, img:s2, title:'Identify', body: 'Instant identification of potential threats'},
  {id: 3, img:s3, title:'Communication', body: 'Upon detection of potential threats alerts are immediately sent to first responders'},
  {
    id: 4, img: s3, title: <div className="ms-2 text-dark px-2 py-3 bg-glass rounded d-flex flex-column">
      {/* <div className="w-auto ms-1 my-4 d-flex "> */}
        <img src={tom} width="120px" className="mb-3 rounded" />
      {/* </div> */}

      <h2>GOVERNER TOM RIDGE</h2>
      <div className="italic reg mb-3 lighter">- First United States Secretary of Homeland Security</div>
      <div className="sm pt-2 ms-4 mb-2">"Our Goal is to Deter any potential attack with multiple levels of security"</div>
    </div>, body: ''
  }
]
const LandingPage = () => <>
  <Slider items={slideItems} />
</>;

export default LandingPage;
