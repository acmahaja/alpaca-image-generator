import "./App.css";
import Button from "./Button";
import RenderAlpaca from "./RenderAlpaca";

import React, { Component } from "react";
import domtoimage from "dom-to-image-more";

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
    this.download = this.download.bind(this);
    this.random = this.random.bind(this);
  }

  setCurrentMenu(value) {
    this.setState({
      currentMenu: value,
    });
  }

  download() {
    var node = document.getElementById("alpaca");
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "alpaca.jpeg";
        link.href = dataUrl;
        link.click();
        
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  random(){
    this.setState({ selected_style: {
      accessories: this.props.options.accessories[Math.floor(Math.random()*this.props.options.accessories.length)],
      backgrounds: this.props.options.backgrounds[Math.floor(Math.random()*this.props.options.backgrounds.length)],
      ears: this.props.options.ears[Math.floor(Math.random()*this.props.options.ears.length)],
      eyes: this.props.options.eyes[Math.floor(Math.random()*this.props.options.eyes.length)],
      hair: this.props.options.hair[Math.floor(Math.random()*this.props.options.hair.length)],
      leg: this.props.options.leg[Math.floor(Math.random()*this.props.options.leg.length)],
      mouth: this.props.options.mouth[Math.floor(Math.random()*this.props.options.mouth.length)],
      neck: this.props.options.neck[Math.floor(Math.random()*this.props.options.neck.length)],
    }
    })
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
          selected={
            this.state.selected_style[this.state.currentMenu] === element
          }
          update={() => this.setStyle(this.state.currentMenu, element)}
        />
      );
    });

    return (
      <div className="App">
        <div className="created-by"  href="https://www.acmahaja.com/">
          <img src="http://www.acmahaja.com/images/profile.png"/>
          Created by  <a href="https://www.acmahaja.com/">@acmahaja</a>
        </div>

        <h1>alpaca generator</h1>
        <div className="menu">
          <div className="drawing">
            <RenderAlpaca design={this.state.selected_style} />
            <div className="downloadOptions">
              <div className="Random button" onClick={this.random}>🔀 Random</div>
              <div className="Download button" onClick={this.download}>
                🖼️ Download
              </div>
            </div>
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
