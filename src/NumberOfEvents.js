import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
    };
  }

  handleInputValue = (event) => {
    const value = event.target.value;
    if (value >= 1 || value <= 32) {
      this.setState({
        query: value,
      });
    }
    if (value < 1 || value > 32) {
      alert("Please select a number of events between 1 and 32.");
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label className="number-of-events-label">Number of Events: </label>
        <input
          type="number"
          className="number-of-events-input"
          value={this.state.query}
          onChange={this.handleInputValue}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
