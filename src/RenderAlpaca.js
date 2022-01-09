import React, { Component } from "react";
import './RenderAlpaca.css'


class RenderAlpaca extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let design = this.props.design;
    return (
      <div className="drawing">
        <div
          className="alpaca" id="alpaca"
        >
          <img src={process.env.PUBLIC_URL + `/alpaca/backgrounds/${design.backgrounds}.png`} className="background" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/nose.png`} className="nose" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/neck/${design.neck}.png`} className="neck" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/mouth/${design.mouth}.png`} className="mouth" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/ears/${design.ears}.png`} className="ears" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/hair/${design.hair}.png`} className="hair" alt="" />
          <img src={process.env.PUBLIC_URL + `/alpaca/eyes/${design.eyes}.png`} className="eyes" alt="" />
          
          {design.accessories==='none' ?  null : <img src={process.env.PUBLIC_URL + `/alpaca/accessories/${design.accessories}.png`} className="accessories" alt="" />}
          <img src={process.env.PUBLIC_URL + `/alpaca/leg/${design.leg}.png`} className="leg" alt="" />
        </div>
      </div>
    );
  }
}

export default RenderAlpaca;
