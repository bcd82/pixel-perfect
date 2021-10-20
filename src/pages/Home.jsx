import { useState } from "react";
import { Hero } from "../cmps/Hero"
import { USPs } from "../cmps/USPs"
import { Testimonials } from "../cmps/Testimonials"
import { GetStarted } from "../cmps/GetStarted"

export function Home () {

    return (
        <section className="home flex column">
         <Hero/>
         <USPs/>
         <Testimonials/>
         <GetStarted/>
        </section>    
    );
}
