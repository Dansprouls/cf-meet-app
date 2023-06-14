// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  state = { showDetails: true };
  handleShowDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="event-summary">Event Summary: {event.summary}</h1>
        <div className="event-details-location">
          <p>Event Location: {event.location}</p>
        </div>
        {this.state.showDetails === false && (
          <div className="event-details">
            <h3>About this event</h3>
            <p>Event Start: {new Date(event.start.dateTime).toISOString()}</p>
            <p>Event End: {new Date(event.end.dateTime).toISOString()}</p>
            <p>Description: {event.description}</p>
          </div>
        )}
        <button
          className="details-button"
          onClick={() => this.handleShowDetails()}
        >
          {showDetails ? "Show" : "Hide"} details
        </button>
      </div>
    );
  }
}

export default Event;

/*
import React, { Component } from "react";

class Event extends Component {
  state = { showDetails: false };
  handleShowDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="event-summary">Event Summary: {event.summary}</h1>
        <ul className="event-details">
          <li>Description: {event.description}</li>
          <li>Event Start: {new Date(event.start.dateTime).toISOString()}</li>
          <li>Event End: {new Date(event.end.dateTime).toISOString()}</li>
          <li>Event Location: {event.location}</li>
        </ul>
        <button
          className="details-button"
          onClick={() => this.handleShowDetails()}
        >
          {!showDetails ? "Show" : "Hide"} details
        </button>
      </div>
    );
  }
}

export default Event;
*/
