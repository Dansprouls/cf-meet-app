import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render correct details for an event", () => {
    /*const displayInfo = EventWrapper.find(".details-button");
    displayInfo.simulate("click");*/
    const eventSummary = EventWrapper.find(".event-summary");
    const eventDetails = EventWrapper.find(".event-details li");
    expect(eventSummary.text()).toBe(`Event Summary: ${event.summary}`);
    expect(eventDetails.at(0).text()).toBe(`Description: ${event.description}`);
    expect(eventDetails.at(1).text()).toBe(
      `Event Start: ${new Date(event.start.dateTime).toISOString()}`
    );
    expect(eventDetails.at(2).text()).toBe(
      `Event End: ${new Date(event.end.dateTime).toISOString()}`
    );
    expect(eventDetails.at(3).text()).toBe(`Event Location: ${event.location}`);
  });

  test("toggle details", () => {
    const display = EventWrapper.find(".details-button");
    display.simulate("click");
    expect(EventWrapper.find(".details-button").text()).toBe("Hide details");
  });
});
