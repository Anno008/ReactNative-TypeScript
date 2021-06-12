import React from "react";
import { render } from "@testing-library/react-native";

import SettingsScreen from "../SettingsScreen";

describe("SettingsScreen tests", () => {
  it("Should display settings screen title", () => {
    const renderResult = render(<SettingsScreen />);
    const title = renderResult.getByText("Settings Screen");
    expect(title).toBeDefined();
  });
});
