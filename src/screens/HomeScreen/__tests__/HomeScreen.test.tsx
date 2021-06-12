import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import HomeScreen from "../HomeScreen";

describe("HomeScreen tests", () => {
  it("Should display home screen title", () => {
    const renderResult = render(<HomeScreen />);
    const title = renderResult.getByText("Home Screen");
    expect(title).toBeDefined();
  });

  it("Should display text after button click", () => {
    const text = "Random Text";
    const renderResult = render(<HomeScreen />);

    const textElement = renderResult.getByTestId("textInput");
    fireEvent.changeText(textElement, text);

    const showTextBtn = renderResult.getByTestId("printTextButton");
    fireEvent.press(showTextBtn);

    const resultingTextElement = renderResult.findByText(text);
    expect(resultingTextElement).toBeDefined();
  });
});
