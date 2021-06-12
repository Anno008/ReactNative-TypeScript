import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "screens/HomeScreen";
import SettingsScreen from "screens/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigation = (): JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "navy"
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // Create custom tab bar item component and conditionally add test id
          tabBarTestID: "homeTab",
          tabBarAccessibilityLabel: "homeTab"
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarTestID: "settingsTab",
          tabBarAccessibilityLabel: "settingsTab"
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
