import React, { Component } from 'react';
import '../child.css'

class Child extends Component {
  render() {
    return (
      <div>
        <div className="mycard">
            <img src={"https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg"}/>
            <h4>Rs 120,000</h4>
            <p className="title">lorem usfsfs fsfssf sdsdv sds</p>
            <p className="loc">Karachi</p>
        </div>
      </div>
    );
  }
}

export default Child;