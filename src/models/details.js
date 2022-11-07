import sL from "../assets/images/products/shield/my_shield_logo.png";
import s1 from "../assets/images/products/shield/1.png";
import s2 from "../assets/images/products/shield/2.png";
import s3 from "../assets/images/products/shield/3.png";
import s4 from "../assets/images/products/shield/4.png";
import s5 from "../assets/images/products/shield/5.png";

import pL from "../assets/images/products/pin/pin_point_logo.png";
import p1 from "../assets/images/products/pin/1.png";
import p2 from "../assets/images/products/pin/2.png";
import p3 from "../assets/images/products/pin/3.png";
import p4 from "../assets/images/products/pin/4.png";
import p5 from "../assets/images/products/pin/5.png";
import p6 from "../assets/images/products/pin/6.png";
import p7 from "../assets/images/products/pin/7.png";
import p8 from "../assets/images/products/pin/8.png";
import p9 from "../assets/images/products/pin/9.png";
import p10 from "../assets/images/products/pin/10.png";
import p11 from "../assets/images/products/pin/11.png";
import p12 from "../assets/images/products/pin/12.png";
import p13 from "../assets/images/products/pin/13.png";
import p14 from "../assets/images/products/pin/14.png";
import p15 from "../assets/images/products/pin/15.png";
import p16 from "../assets/images/products/pin/16.png";

import fL from "../assets/images/products/feva/Iveda_feva.png";
import f1 from "../assets/images/products/feva/1.png";
import f2 from "../assets/images/products/feva/2.png";
import f3 from "../assets/images/products/feva/3.png";

import aL from "../assets/images/products/iveda_ai/iveda_logo.png";
import a1 from "../assets/images/products/iveda_ai/1.png";
import a2 from "../assets/images/products/iveda_ai/2.png";
import a3 from "../assets/images/products/iveda_ai/3.png";
import a4 from "../assets/images/products/iveda_ai/4.png";
import a5 from "../assets/images/products/iveda_ai/5.png";

import cL from "../assets/images/products/clearview/clearview_logo.png"
import c1 from "../assets/images/products/clearview/active_shooter.webm"
import c2 from "../assets/images/products/clearview/rapid_response.webm"
import c3 from "../assets/images/products/clearview/smart_tower.webm"

const details = [
  {
    id: "shield",
    logo: sL,
    items: [
      {
        type: 'yt',
        src: 'https://youtu.be/72Y-218Rhig'
      },
      { type: 'image', src: s1 },
      { type: 'image', src: s2 },
      { type: 'image', src: s3 },
      { type: 'image', src: s4 },
      { type: 'image', src: s5 },
    ]
  },
  {
    id: "pin",
    logo: pL,
    items: [
      { type: 'image', src: p1 },
      { type: 'image', src: p2 },
      { type: 'image', src: p3 },
      { type: 'image', src: p4 },
      { type: 'image', src: p5 },
      { type: 'image', src: p6 },
      { type: 'image', src: p7 },
      { type: 'image', src: p8 },
      { type: 'image', src: p9 },
      { type: 'image', src: p10 },
      { type: 'image', src: p11 },
      { type: 'image', src: p12 },
      { type: 'image', src: p13 },
      { type: 'image', src: p14 },
      { type: 'image', src: p15 },
      { type: 'image', src: p16 },
    ]
  },
  {
    id: "feva",
    logo: fL,
    items: [
      { type: 'image', src: f1 },
      { type: 'image', src: f2 },
      { type: 'image', src: f3 },
    ]
  },
  {
    id: "iveda",
    logo: aL,
    items: [
      { type: 'image', src: a1 },
      { type: 'image', src: a2 },
      { type: 'image', src: a3 },
      { type: 'image', src: a4 },
      { type: 'image', src: a5 },
    ]
  },
  {
    id: "clearview",
    logo: cL,
    items: [
      { title:"ClearView Active Shooter Demonstration Advanced tech for early threat detection", type: 'video', src: c1 },
      { title:"Rapid Response Security", type: 'video', src: c2 },
      { title: 'Smart Tower', type: 'video', src: c3 },
    ]
  },
]
export default details