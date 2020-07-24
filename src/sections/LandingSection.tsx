import React, {FunctionComponent} from "react";


const LandingSection: FunctionComponent<any> = () => {
  return <header>
    <div className="introduction fill-screen">
      <h1>
        Hello, I'm
        <span className="name"> Ingo Andelhofs</span>.
        <span className="secondary"> I'm a software developer and student at Hasselt University.</span>
      </h1>
    </div>
  </header>;
}

export default LandingSection;