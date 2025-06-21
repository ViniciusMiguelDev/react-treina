import React from "react";
// import ReactDOM from "react-dom/client";
import "./Board.css";
import Square from "../Square/Square";
class Board extends React.Component {
  render() {
    return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }
}
export default Board;
