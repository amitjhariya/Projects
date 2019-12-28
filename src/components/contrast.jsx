import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { SliderRail, Handle, Track } from './slider/slider.jsx'

const sliderStyle = {
    position: 'absolute',
    width: '200px',
    touchAction: 'none',
    margin:'30px'
  }
  
  const domain = [1, 5]
  const defaultValues = [3]

class Contrast extends Component {
    state = {
        values: defaultValues.slice(),
        update: defaultValues.slice(),
      }
    
      onUpdate = update => {
        
      }
    
      onChangeContrast =values=> {
        console.log("Values:"+values)
        console.log("Contrast From Class Components:"+values)
        this.props.changeContrast(values);
      }
    
  render() {
    const {
        state: { values, update },
      } = this
    return (
      <div>
        <h6 className="mt-3">Contrast</h6>
        <div className="cont-slider mt-n3">
        
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChangeContrast}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
        </div>
    );
  }
}

export default Contrast;
