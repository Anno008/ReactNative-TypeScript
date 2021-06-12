import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import { setTestId } from "testUtils/setTestId";

const HomeScreen = (): JSX.Element => {
  const [text, setText] = useState<string>();
  const [showText, setShowText] = useState<boolean>(false);

  return (
    <View>
      <Text {...setTestId("homeScreenTitle")}>Home Screen</Text>
      <TextInput
        {...setTestId("textInput")}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Print text"
        {...setTestId("printTextButton")}
        onPress={() => setShowText(true)}
      />
      <Text {...setTestId("textInputResult")}>{showText && text}</Text>
    </View>
  );
};

export default HomeScreen;
