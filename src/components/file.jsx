import React, { Component } from "react";

class file extends Component {
  render() {
    const blob=this.props.Blob
    return (
      <svg className ="main-box"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d={blob}
            fill={this.props.Color}
          />
        </g>
      </svg>
    );
  }
}

export default file;
