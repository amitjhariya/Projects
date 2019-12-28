import React, { Component } from "react";
import { TwitterPicker } from "react-color";
import IosColorPalette from 'react-ionicons/lib/IosColorPalette'


class ColorBox extends Component {
  state = {
    color: "#F78DA7",
    displayColorPicker: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChangeComplete = color => {
    this.setState(
      {
        color: color.hex
      },
      this.props.changeColor(color.hex)
    );
  };

  render() {
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"

    };

    return (
      <div>
        <h6>Color</h6>
        
        <button onClick={this.handleClick} className="btns color-btn" style={{
          background:this.state.color
        }}>
                       
        </button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <TwitterPicker
              color={this.state.color}
              onChange={this.handleChangeComplete}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorBox;
