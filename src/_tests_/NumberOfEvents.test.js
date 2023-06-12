import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("Default number of events is 32", () => {
    expect(NumberOfEventsWrapper.state("query")).toBe(32);
  });

  test("change input to desired number of events correctly", () => {
    NumberOfEventsWrapper.find(".number-of-events-input").simulate("change", {
      target: { value: 12 },
    });
    expect(NumberOfEventsWrapper.state("query")).toBe(12);
  });

  test("error message on invalid number of events", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    NumberOfEventsWrapper.find(".number-of-events-input").simulate("change", {
      target: { value: 45 },
    });
    expect(alertMock).toHaveBeenCalledWith(
      "Please select a number of events between 1 and 32."
    );
    alertMock.mockRestore();
  });
});
