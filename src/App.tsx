import React, {Component} from 'react';
import Background from "./components/Background";
import "./css/app.css";


/**
 * component App
 * @author Ingo Andelhofs
 */
class App extends Component<any, any> {

  public render() {
    return <>
      <h1 onClick={() => window.open("https://github.com/IngoA-1848613", "_blank")} className="name">Ingo Andelhofs</h1>
      <p style={{transform: "rotate(90deg)"}} className="name y2020">2020</p>
      <Background />
    </>;
  }
}


export default App;
