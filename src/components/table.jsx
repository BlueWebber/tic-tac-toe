import React, { useContext } from "react";
import Cell from "./cell";
import BoardContext from "../context/boardContext";
import chunkArray from "../utils/chunkArray";
import StartBox from "./startBox";
import Popup from "reactjs-popup";

const Table = (props) => {
  const context = useContext(BoardContext);
  const handleClick = (cell) => {
    if (context.currentPlayer === "x") {
      context.setCell(cell, "x");
      context.setPlayer("o");
    } else {
      context.setCell(cell, "o");
      context.setPlayer("x");
    }
  };

  const handleRestart = () => {
    context.setPlayer(context.starter);
    context.resetCells();
  };

  const handleChangeSettings = () => {
    context.resetCells();
    context.setStarted(false);
  };

  const renderStatus = () => {
    if (props.winner === -1) return "It's a tie";
    if (props.winner)
      return (
        (context.playerNames[props.winner] || props.winner.toUpperCase()) +
        " won the game"
      );
    return (
      (context.playerNames[context.currentPlayer] ||
        context.currentPlayer.toUpperCase()) + "'s turn"
    );
  };

  const cells = chunkArray(context.cells, 3);
  return (
    <div
      className="position-absolute top-50 start-50 translate-middle bg-dark rounded text-center"
      style={{ padding: 10 }}
    >
      <p className="text-light fs-3">{renderStatus()}</p>
      <div className="container" style={{ minWidth: 342 }}>
        {cells.map((row, index) => (
          <div key={index}>
            {row.map((cell) => (
              <Cell
                id={cell.id}
                key={cell.id}
                value={cell.value}
                handleClick={() => handleClick(cell)}
                winner={props.winner}
              />
            ))}
          </div>
        ))}
      </div>
      {props.winner && (
        <div>
          <button className="btn btn-primary m-2" onClick={handleRestart}>
            Restart
          </button>
          <Popup
            trigger={
              <button
                className="btn btn-primary m-2"
                onClick={handleChangeSettings}
              >
                Change Settings
              </button>
            }
            nested
            position="top"
          >
            <StartBox />
          </Popup>
        </div>
      )}
    </div>
  );
};

export default Table;
