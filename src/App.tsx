import React from "react"
import "./styles/portfolio.css"

import AppWrapper from "./components/AppWrapper";
import LandingSection from "./sections/LandingSection";
import AboutSection from "./sections/AboutSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";


const App = () => {
  return <AppWrapper>
    <LandingSection/>

    <AboutSection/>

    <TechnologiesSection/>

    <ContactSection/>

    <FooterSection/>
  </AppWrapper>;
}


export default App;
