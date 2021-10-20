import React from "react";
import personIcon from "../assets/imgs/icon-person.svg";
import cogIcon from "../assets/imgs/icon-cog.svg";
import chartIcon from "../assets/imgs/icon-chart.svg";

const uspBoxData = [
  {
    icon: personIcon,
    title: "Experienced Individuals",
    txt: "Our network is made up of highly experienced professionals whoare passionate about what they do.",
  },
  {
    icon: cogIcon,
    title: "Easy to Implement",
    txt: "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    icon: chartIcon,
    title: "Enhanced Productivity",
    txt: "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];
export function USPs() {
  return (
    <section className="usps flex justify-center">
      <div className="main-layout content flex">
        <h2>Build & manage distributed teams like no one else.</h2>
        <div className="usp-list flex column">
          {uspBoxData.map((data) => (
            <article className="usp-box flex">
              <img src={data.icon} className="icon"/>
              <div className="usp-text flex column">
                <h4>{data.title}</h4>
                <p>{data.txt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
