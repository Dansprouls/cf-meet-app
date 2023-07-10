import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { Row, Col } from "react-bootstrap";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    selectedLocation: "all",
    numberOfEvents: 32,
  };

  updateNumberOfEvents(number) {
    this.setState({ numberOfEvents: number });
  }

  updateEvents = (location, eventCount) => {
    const { selectedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          selectedLocation: location,
          numberOfEvents: eventCount,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          selectedLocation === "all"
            ? events
            : events.filter((event) => event.location === selectedLocation);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          numberOfEvents: eventCount,
        });
      });
    }
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>RoundUp</h1>
          <h3>Find tech events in your area!</h3>
          <Row>
            <Col md={6}>
              <CitySearch
                locations={this.state.locations}
                updateEvents={this.updateEvents}
              />
            </Col>
            <Col md={6}>
              <NumberOfEvents
                numberOfEvents={this.state.numberOfEvents}
                updateEvents={this.updateEvents}
              />
            </Col>
          </Row>
          <EventList events={this.state.events} />
        </div>
      </>
    );
  }
}

export default App;

/*
import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { Row, Col } from "react-bootstrap";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <>
        <div className="App">
          <Row>
            <Col md={6}>
              <CitySearch
                locations={this.state.locations}
                updateEvents={this.updateEvents}
              />
            </Col>
            <Col md={6}>
              <NumberOfEvents />
            </Col>
          </Row>
          <EventList events={this.state.events} />
        </div>
      </>
    );
  }
}

export default App;
*/
