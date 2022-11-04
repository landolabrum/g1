import React from "react";
import Slider from "../components/slider/slider";
import s1 from "../assets/images/backgrounds/banner_1.png"
import s2 from "../assets/images/backgrounds/banner_2.png"
import s3 from "../assets/images/backgrounds/banner_3.png"
const slideItems = [
  {id: 1, img:s1, title:'Detection', body: 'Guardian One employs video and AI technology to provide immediate detection'},
  {id: 2, img:s2, title:'Identify', body: 'Instant identification of potential threats'},
  {id: 3, img:s3, title:'Communication', body: 'Upon detection of potential threats alerts are immediately sent to first responders'}
]
const LandingPage = () => <>
<Slider items={slideItems}/>
</>;

export default LandingPage;
