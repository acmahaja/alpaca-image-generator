import "./App.css";
import Button from "./Button";

import Blue50 from "./alpaca/backgrounds/blue50.png";
import DefaultNose from "./alpaca/nose.png";
import DefaultNeck from "./alpaca/neck/default.png";
import DefaultMouth from "./alpaca/mouth/default.png";
import DefaultHair from "./alpaca/hair/default.png";
import DefaultEyes from "./alpaca/eyes/default.png";
import DefaultEars from "./alpaca/ears/default.png";

import React, { Component } from "react";

class App extends Component {
  static defaultProps = {
    options: {
      accessories: ["none", "earings", "flower", "glasses", "headphone"],
      backgrounds: [
        "blue50",
        "blue60",
        "blue70",
        "darkblue30",
        "darkblue50",
        "darkblue70",
        "green50",
        "green60",
        "green70",
        "grey40",
        "grey70",
        "grey80",
        "red50",
        "red60",
        "red70",
        "yellow50",
        "yellow60",
        "yellow70",
      ],
      ears: ["default", "tilt-backward", "tilt-forward"],
      eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
      hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
      leg: [
        "default",
        "bubble-tea",
        "cookie",
        "game-console",
        "tilt-backward",
        "tilt-forward",
      ],
      mouth: ["default", "astonished", "eating", "laugh", "tongue"],
      neck: ["default", "bend-backward", "bend-forward", "thick"],
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "accessories",
        "backgrounds",
        "ears",
        "eyes",
        "hair",
        "leg",
        "mouth",
        "neck",
      ],
      currentMenu: "accessories",
      selected_style: {
        accessories: "none",
        backgrounds: "darkblue70",
        ears: "default",
        eyes: "default",
        hair: "default",
        leg: "default",
        mouth: "default",
        neck: "default",
      },
    };
    this.setCurrentMenu = this.setCurrentMenu.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

  setCurrentMenu(value) {
    this.setState({
      currentMenu: value,
    });
  }

  setStyle(option, value) {
    switch (option) {
      case "accessories":
        this.setState({
          selected_style: { ...this.state.selected_style, accessories: value },
        });
        break;

      case "backgrounds":
        this.setState({
          selected_style: { ...this.state.selected_style, backgrounds: value },
        });

        break;

      case "ears":
        this.setState({
          selected_style: { ...this.state.selected_style, ears: value },
        });
        break;

      case "eyes":
        this.setState({
          selected_style: { ...this.state.selected_style, eyes: value },
        });
        break;

      case "hair":
        this.setState({
          selected_style: { ...this.state.selected_style, hair: value },
        });
        break;

      case "leg":
        this.setState({
          selected_style: { ...this.state.selected_style, leg: value },
        });
        break;

      case "mouth":
        this.setState({
          selected_style: { ...this.state.selected_style, mouth: value },
        });
        break;

      case "neck":
        this.setState({
          selected_style: { ...this.state.selected_style, neck: value },
        });
        break;
      default:
        break;
    }
  }

  render() {
    // this.props.options
    let accessories_options = Object.entries(this.props.options).map((obj) => {
      return (
        <Button
          value={obj[0]}
          update={() => this.setCurrentMenu(obj[0])}
          selected={this.state.currentMenu === obj[0]}
        />
      );
    });

    let style_options = [];

    this.props.options[this.state.currentMenu].forEach((element) => {
      style_options.push(
        <Button
          value={element}
          selected={this.state.selected_style[this.state.currentMenu] === element}
          update={() => this.setStyle(this.state.currentMenu, element)}
        />
      );
    });

    return (
      <div className="App">
        <h1>alpaca generator</h1>
        <div className="menu">
          <div className="drawing">
            <div
              className="alpaca"
              style={{
                backgroundImage: `url(${Blue50})`,
              }}
            >
              <img src={DefaultNose} className="nose" />
              <img src={DefaultMouth} className="mouth" />
              <img src={DefaultNeck} className="neck" />
              <img src={DefaultHair} className="hair" />
              <img src={DefaultEyes} className="eyes" />
              <img src={DefaultEars} className="ears" />
            </div>
            <div className="download"></div>
          </div>
          <div className="options">
            <div className="AccessoriesOptions">
              <div className="title">Accessorize the Alpaca's</div>
              {accessories_options}
            </div>
            <div className="Style">
              <div className="title">Style</div>
              {style_options}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
