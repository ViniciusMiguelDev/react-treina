import React from "react";

import "./Square.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomezinho: null,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      nomezinho:
        prevState.nomezinho === null
          ? "X"
          : prevState.nomezinho === "X"
          ? "O"
          : null,
    }));
  };

  render() {
    return (
      <>
        <button className="square" onClick={this.handleClick}>
          {this.state.nomezinho}
        </button>
      </>
    );
  }
}

export default Square;
