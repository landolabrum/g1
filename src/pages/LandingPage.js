import React from "react";
import Slider from "../components/slider/slider";
import s1 from "../assets/images/backgrounds/banner_1.png"
import s2 from "../assets/images/backgrounds/banner_2.png"
import s3 from "../assets/images/backgrounds/banner_3.png"
import tom from '../assets/images/slider_tom_ridge.png';
const TrSlide = () => {
  return <div className="d-flex border w-100 rounded bg-white mt-3 shadow">
    <div className="d-flex">
      <img src={tom} className="img-fluid rounded-left" />
    </div>
    <div className="mx-5 py-4">
      <div className="d-flex align-items-center justify-content-center h-100 w-100">
        <h3 className="text-dark italic"> "Our Goal is to Deter any potential attack with multiple levels of security"</h3>
      </div>
    </div>
  </div>
}
const slideItems = [
  {id: 1, img:s1, title:'Detection', body: 'Guardian One employs video and AI technology to provide immediate detection'},
  {id: 2, img:s2, title:'Identify', body: 'Instant identification of potential threats'},
  {id: 3, img:s3, title:'Communication', body: 'Upon detection of potential threats alerts are immediately sent to first responders'},
  { id: 4, img: s3, title: "GOVERNOR TOM RIDGE", body: "- First United States Secretary of Homeland Security", content: <TrSlide/>},
]
const LandingPage = () => <>
  <Slider items={slideItems} />
</>;

export default LandingPage;
