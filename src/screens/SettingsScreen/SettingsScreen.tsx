import React from "react";
import { Text, View } from "react-native";

import { setTestId } from "testUtils/setTestId";

const SettingsScreen = (): JSX.Element => (
  <View>
    <Text {...setTestId("settingsScreenTitle")}>Settings Screen</Text>
  </View>
);

export default SettingsScreen;
