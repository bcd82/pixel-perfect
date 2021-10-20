import { Navbar } from "../cmps/Navbar";
import sideImg from "../assets/imgs/bg-pattern-home-1.svg";
import bottomImg from "../assets/imgs/bg-pattern-home-2.svg";

export function Hero() {
  return (
    <section className="hero flex column  align-center">
      <div className="main-layout flex column">
        <Navbar />
        <div className="hero-main flex align-center">
          <img className="side-img" src={sideImg} />
          <div className="left">
            <h1>
              Find the best <span>talent</span>
            </h1>
          </div>
          <div className="right">
            <div className="top-line" />
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
          </div>
        <img className="bottom-img" src={bottomImg} />
        </div>
      </div>
    </section>
  );
}
