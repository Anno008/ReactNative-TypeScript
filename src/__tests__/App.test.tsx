import React from "react";

import { render } from "@testing-library/react-native";

import App from "../App";

describe("App tests", () => {
  it("Should display home screen on app boot", () => {
    const renderResult = render(<App />);
    const title = renderResult.getByText("Home Screen");
    expect(title).toBeDefined();
  });
});
