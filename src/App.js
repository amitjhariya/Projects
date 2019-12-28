import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";

import SVG from "./components/file.jsx";
import ColorBox from "./components/colorBox";
import Complexity from "./components/complexity";
import Contrast from "./components/contrast";
import Download from "./components/download";
import Blob from "./components/blob";
import Leftsvg from "./components/svg/leftsvg";
import Rightsvg from "./components/svg/rightsvg";
import Circle from "./components/svg/circle";
import Polysvg from "./components/svg/polysvg";
import Logo from "./components/svg/logo";
import Twitter from "./components/svg/twitter";
import Rlogo from "./components/svg/rlogo";
import mySvg from "./mySvg.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#FFB4BC",
      blob: "",
      complexity: 5,
      contrast: 3
    };
  }

  onChangeColor(newColor) {
    this.setState({
      color: newColor
    });
  }
  onChangeBlob(newBlob) {
    this.setState({
      blob: newBlob
    });
  }
  onChangeComplexity(newComplexity) {
    this.setState({
      complexity: newComplexity
    });
    console.log("Complexity Final App.js: " + this.state.complexity);
    console.log("Contrast  Final App.js: " + this.state.contrast);
  }
  onChangeContrast(newContrast) {
    this.setState({
      contrast: newContrast
    });
    console.log("Complexity Final App.js: " + this.state.complexity);
    console.log("Contrast  Final App.js: " + this.state.contrast);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-12 ">
              <div className="nav row">
                <div className="col-md-12">
                  {" "}
                  <Logo />
                </div>
                <div className="col-md-12">
                  <div className="share ">
                    <Twitter />
                  </div>
                </div>
                <div className="navlink  col-md-6">
                  <p className="sharetxt">share</p>
                </div>
              </div>
            </div>
            <SVG
              ref={this.myRef}
              Color={this.state.color}
              Blob={this.state.blob}
              className="com-md-4"
            ></SVG>
            <div className="col-md-3">
              <Rlogo />
            </div>
          </div>

          <div className="row mt-3 tools text-center">
            <div className="col-md-1 col-sm-12 color-box box">
              <ColorBox
                changeColor={this.onChangeColor.bind(this)}
                className=""
              />
            </div>
            <div className="col-md-4  col-sm-12 comp-box box">
              <div className="row">
                <div className="col-md-2 col-sm-3 svgBox">
                  <Leftsvg></Leftsvg>
                </div>
                <div className="col-md-8 col-sm-6 pad0 ">
                  <Complexity
                    changeComplexity={this.onChangeComplexity.bind(this)}
                    className=" "
                  />
                </div>
                <div className="col-md-2  col-sm-3 svgBox2">
                  <Rightsvg />
                </div>
              </div>
            </div>
            <div className="col-md-4  col-sm-12">
              <div className="row">
                <div className="col-md-2  col-sm-3 svgBox">
                  <Circle />
                </div>
                <div className="col-md-8 col-sm-6 ">
                  <Contrast
                    changeContrast={this.onChangeContrast.bind(this)}
                    className=""
                  />
                </div>
                <div className="col-md-2 col-sm-3 svgBox2">
                  <Polysvg />
                </div>
              </div>
            </div>

            <div className="col-md-3  col-sm-12 left-border">
              <div className="row">
                <div className="col-md-6 col-sm-6 mt-2 reload-box center-border">
                  <Blob
                    changeBlob={this.onChangeBlob.bind(this)}
                    Comp={this.state.complexity}
                    Contrast={this.state.contrast}
                    className=""
                  />
                </div>
                <div className="col-md-6 col-sm-6 mt-2 download-box left-border">
                  <Download className="" Color={this.state.color} Blob={this.state.blob}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
