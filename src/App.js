import Table from "./components/table";
import BoardContext from "./context/boardContext";
import { Component } from "react";
import calculateResult from "./utils/calculateResult";
import StartBox from "./components/startBox";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "o",
      playerNames: { x: null, o: null },
      cells: [
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null },
      ],
      isStarted: false,
      starter: "o",
    };
  }

  setCell = (cell, value) => {
    const cells = [...this.state.cells];
    const index = cells.indexOf(cell);
    const target = { ...cells[index] };
    target.value = value;
    cells[index] = target;
    this.setState({ cells });
  };

  setPlayer = (player) => {
    this.setState({ currentPlayer: player });
  };

  setPlayerNames = (xName, oName) => {
    const playerNames = { ...this.state.playerNames };
    playerNames.x = xName;
    playerNames.o = oName;
    this.setState({ playerNames });
  };

  resetCells = () => {
    const cells = this.state.cells.map((cell) => {
      cell.value = null;
      return cell;
    });
    this.setState({ cells });
  };

  renderContent = () => {
    if (this.state.playerNames.x === null || !this.state.isStarted) {
      return <StartBox />;
    } else {
      return <Table winner={calculateResult(this.state.cells)} />;
    }
  };

  setStarted = (isStarted) => {
    this.setState({ isStarted });
  };

  setStarter = (starter) => {
    this.setState({ starter, currentPlayer: starter });
  };

  render() {
    return (
      <BoardContext.Provider
        value={{
          cells: this.state.cells,
          currentPlayer: this.state.currentPlayer,
          playerNames: this.state.playerNames,
          setCell: this.setCell,
          setPlayer: this.setPlayer,
          setPlayerNames: this.setPlayerNames,
          resetCells: this.resetCells,
          isStarted: this.state.isStarted,
          setStarted: this.setStarted,
          starter: this.state.starter,
          setStarter: this.setStarter,
        }}
      >
        <div
          className="container position-absolute top-50 start-50 translate-middle"
          style={{ padding: 30 }}
        >
          {this.renderContent()}
        </div>
      </BoardContext.Provider>
    );
  }
}

export default App;
