import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./navigators/bottom-bar";
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
