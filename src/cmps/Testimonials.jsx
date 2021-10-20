import kady from "../assets/imgs/avatar-kady.jpg";
import aiysha from "../assets/imgs/avatar-aiysha.jpg";
import arthur from "../assets/imgs/avatar-arthur.jpg";
import topImg from "../assets/imgs/bg-pattern-home-4-about-3.svg"
import bottomImg from "../assets/imgs/bg-pattern-home-5.svg"

import { TestiBox } from "./TestiBox";
const testis = [
    {
        txt:'“The team perfectly fit the specialized skill set required. Theyfocused on the most essential features helping us launch the platform eight months faster than planned.”',
        title:"Product Manager at Bookmark",
        name:"Kady Baker",
        imgSrc:kady
    },
    {
        txt:'“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
        title:"Founder of Manage",
        name:"Aiysha Reese",
        imgSrc:aiysha
    },
    {
        txt:'“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        title:"Co-founder of MyPhysio",
        name:"Arthur Clarke",
        imgSrc:arthur
    },
]
export function Testimonials() {
  return (
    <section className="testimonials flex">
          <img className="top-img" src={topImg}/>          
          <img className="bottom-img" src={bottomImg}/>

      <div className="main-layout content flex column">
        <h2>
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </h2>
        <div className="testi-list flex">
        {testis.map(data => <TestiBox data={data}/>)}
        </div>
      </div>
    </section>
  );
}
