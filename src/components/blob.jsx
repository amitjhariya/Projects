import React, { Component } from "react";
import { TweenMax, TweenLite, TimelineMax, Sine } from "gsap";
import Refresh from 'react-ionicons/lib/MdRefreshCircle'



class Blob extends Component {
  constructor(props) {

    super(props);
    this.state = {
      element: "",
      Blob: "M-44.80085124854512 296.63594476631744 C -130.4322725296213 283.70305300218155 -288.5097616716303 -119.42410736605511 -234.49383821895597 -187.11664767556653 -180.47791476628163 -254.80918798507793 247.67919163909917 -190.14472916439843 279.294689467501 -109.51929709075111 310.9101872959028 -28.893865017103778 40.830570032531035 309.5688365304533 -44.80085124854512 296.63594476631744z",
      numPoints: this.props.Comp,
      centerX: 0,
      centerY: 0,
      minRadius: 300,
      maxRadius: 300,
      minDuration: 1,
      maxDuration: 10
    };
  }


  

  createBlob() {
    console.log("createBlob:"+this.props.Contrast)
    if(this.props.Contrast==5){
      this.state.minRadius=50;
      this.state.maxRadius=300;
    }else if(this.props.Contrast==4){
      this.state.minRadius=100;
      this.state.maxRadius=300;
    }
    else if(this.props.Contrast==3){
      this.state.minRadius=150;
      this.state.maxRadius=300;
    }
    else if(this.props.Contrast==2){
      this.state.minRadius=200;
      this.state.maxRadius=300
    }else if(this.props.Contrast==1){
      this.state.minRadius=300;
      this.state.maxRadius=300;
    }
    else{
      this.state.minRadius=300;
      this.state.maxRadius=400;
    }
    console.log("Final Min Radius:"+this.state.minRadius);
    console.log("Final Max Radius:"+this.state.maxRadius);

    

    
    var path = this.state.element;
    var points = [];
    var slice = (Math.PI * 2) / this.state.numPoints;
    var startAngle = this.random(Math.PI * 2);

    for (var i = 0; i < this.state.numPoints; i++) {
      var angle = startAngle + i * slice;
      var duration = this.random(
        this.state.minDuration,
        this.state.maxDuration
      );


      var point = {
        x: this.state.centerX + Math.cos(angle) * this.random(this.state.minRadius,this.state.maxRadius),
        y: this.state.centerY + Math.sin(angle) * this.random(this.state.minRadius,this.state.maxRadius)
      };

      var tween = TweenMax.to(point, duration, {
        x: this.state.centerX + Math.cos(angle) * this.random(this.state.minRadius,this.state.maxRadius),
        y: this.state.centerY + Math.sin(angle) * this.random(this.state.minRadius,this.state.maxRadius),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });

      points.push(point);
    }

    this.state.points = points;
    this.setState({
        Blob:this.cardinal(points, true, 1)
        
    })
    
    
    
    

    return null;
  }

  // Cardinal spline - a uniform Catmull-Rom spline with a tension option
  cardinal(data, closed, tension) {
    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {
      var p0, p1, p2, p3;

      if (closed) {
        p0 = data[(i - 1 + size) % size];
        p1 = data[i];
        p2 = data[(i + 1) % size];
        p3 = data[(i + 2) % size];
      } else {
        p0 = i === 0 ? data[0] : data[i - 1];
        p1 = data[i];
        p2 = data[i + 1];
        p3 = i === size - 1 ? p2 : data[i + 2];
      }

      var x1 = p1.x + ((p2.x - p0.x) / 6) * tension;
      var y1 = p1.y + ((p2.y - p0.y) / 6) * tension;

      var x2 = p2.x - ((p3.x - p1.x) / 6) * tension;
      var y2 = p2.y - ((p3.y - p1.y) / 6) * tension;

      path +=
        " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
  }

  random(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    if (min > max) {
      var tmp = min;
      min = max;
      max = tmp;
    }
    return min + (max - min) * Math.random();
  }



  onLoad = () => {    
    console.log("Complexity From New State Onload:"+this.props.Comp);
    this.state.numPoints=this.props.Comp;
    console.log("Numpoints State:"+this.state.numPoints);    
    this.createBlob();
    this.props.changeBlob(this.state.Blob); 
    

};
componentDidMount() {
  this.state.numPoints=this.props.Comp; 
  console.log("Numpoints State From Component Did Mount:"+this.state.numPoints)
  this.createBlob();
  this.props.changeBlob(this.state.Blob);  

}
componentDidUpdate(prevProps) {
  if (prevProps.Comp !== this.props.Comp) {
    this.state.numPoints=this.props.Comp;
    this.createBlob();
  this.props.changeBlob(this.state.Blob);
  }
  if (prevProps.Contrast !== this.props.Contrast) {
    this.state.numPoints=this.props.Comp;
    this.createBlob();
  this.props.changeBlob(this.state.Blob);
  }
}

  render() {
    
    return (
      <div>
          <h6>Reload</h6>          
        <button id="reloadBlob" onClick={this.onLoad}  className="btns reload-btn">
          <div  className="icon reload-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" display="block"><g transform="translate(2,2)" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M1.5,7.5 c0-3.866,3.134-7,7-7c2.636,0,4.828,1.641,6,4"></path><polyline points="14.5,0.5 14.5,4.5 10.5,4.5"></polyline><path d="M15.5,8.5 c0,3.866-3.134,7-7,7c-2.636,0-4.828-1.641-6-4"></path><polyline points="2.5,15.5 2.5,11.5 6.5,11.5"></polyline></g></svg></div></button>
      </div>
    );
  }
}

export default Blob;
