import React, { Component } from "react";
import InputField from "./common/inputField";
import Switch from "./common/switch";
import BoardContext from "../context/boardContext";

class StartBox extends Component {
  static contextType = BoardContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {
        playerX: "",
        playerO: "",
        xStarter: false,
      },
    };
  }

  componentDidMount() {
    const data = {
      playerX: this.context.playerNames.x || "",
      playerO: this.context.playerNames.o || "",
      xStarter: this.context.starter === "x" ? true : false,
    };
    this.setState({ data });
  }

  handleChange = ({ currentTarget }) => {
    const data = { ...this.state.data };
    data[currentTarget.id] =
      currentTarget.type === "checkbox"
        ? currentTarget.checked
        : currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    const { data } = this.state;
    e.preventDefault();
    this.context.resetCells();
    this.context.setPlayerNames(data.playerX.trim(), data.playerO.trim());
    this.context.setStarter(data.xStarter ? "x" : "o");
    this.context.setStarted(true);
  };

  render() {
    return (
      <div className="bg-dark rounded" style={{ padding: 20 }}>
        <form autocomplete="off">
          <InputField
            label="Player X's name"
            id="playerX"
            handleChange={this.handleChange}
            type="text"
            value={this.state.data.playerX}
          />
          <InputField
            label="Player O's name"
            id="playerO"
            handleChange={this.handleChange}
            type="text"
            value={this.state.data.playerO}
          />
          <Switch
            label="Player X starts first"
            id="xStarter"
            handleChange={this.handleChange}
            value={this.state.data.xStarter}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Start
          </button>
        </form>
      </div>
    );
  }
}

export default StartBox;
