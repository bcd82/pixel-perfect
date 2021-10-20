import { useState } from "react";
import { Hero } from "../cmps/Hero"
import { USPs } from "../cmps/USPs"

export function Home () {

    return (
        <section className="home flex column">
         <Hero/>
         <USPs/>
        </section>    
    );
}
