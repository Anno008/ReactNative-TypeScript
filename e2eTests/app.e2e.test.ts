describe("ReactNative TypeScript UI tests", () => {
  it("Should display home screen", async () => {
    const homeScreenTitleElement = await $("~homeScreenTitle");
    await homeScreenTitleElement.waitForDisplayed();

    const homeScreenTitleText = await homeScreenTitleElement.getText();
    expect(homeScreenTitleText).toBe("Home Screen");
  });

  it("Should navigate to settings screen", async () => {
    const settingsTab = await $("~settingsTab");
    await settingsTab.click();

    const settingsScreenTitle = await $("~settingsScreenTitle");
    const settingsScreenTitleText = await settingsScreenTitle.getText();
    expect(settingsScreenTitleText).toBe("Settings Screen");
  });

  it("Should navigate back to home screen", async () => {
    const homeTab = await $("~homeTab");
    await homeTab.click();

    const homeScreenTitleElement = await $("~homeScreenTitle");
    await homeScreenTitleElement.waitForDisplayed();

    const homeScreenTitleText = await homeScreenTitleElement.getText();
    expect(homeScreenTitleText).toBe("Home Screen");
  });

  it("Should print typed text on button press", async () => {
    const text = "Testing";

    const textInputElement = await $("~textInput");
    await textInputElement.setValue(text);

    const printTextButton = await $("~printTextButton");
    await printTextButton.click();

    const textInputResultElement = await $("~textInputResult");
    const textInputResultText = await textInputResultElement.getText();

    expect(textInputResultText).toBe(text);
  });
});
