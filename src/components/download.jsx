import React, { Component } from 'react';
import Refresh from 'react-ionicons/lib/MdCloudDownload'

class Download extends Component { 

     

    
    
    render() {
        const data1=`data:image/svg+xml;charset=utf-8,<%3Fxml%20version%3D"1.0"%20standalone%3D"no"%3F>%0A<svg%0A%20%20width%3D"600"%0A%20%20height%3D"600"%0A%20%20viewBox%3D"0%200%20600%20600"%0A%20%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%0A>%0A%20%20<g%20transform%3D"translate(300%2C300)">%0A%20%20%20%20<path%20d%3D"`;
        const color = this.props.Color.replace("#", "%23");
        const data2=`"%20fill%3D"`+color+`"%20%2F>%0A%20%20<%2Fg>%0A<%2Fsvg>%0A%20%20`;
        const res = this.props.Blob.replace(",", "%2c");
        const dataURL=data1+res+data2;
        
        return (
            <div className="download-box">
                <h6>Download</h6>
                <a href={dataURL} download>
                <button  className="btns download-btn">
        
        <div className="icon download-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g transform="translate(2,2)" class="nc-icon-wrapper" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon stroke-miterlimit="10" points="3.5,6.5 8,11.5 12.5,6.5 9.5,6.5 9.5,0.5 6.5,0.5 6.5,6.5"></polygon><path d="M15.5,10.5v4c0,0.552-0.448,1-1,1h-13 c-0.552,0-1-0.448-1-1v-4"></path></g></svg>
        </div>
        </button>
                </a>
        
      </div>
        );
    }
}

export default Download;