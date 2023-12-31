import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenFirst from "./screen/ScreenFirst";
import ScreenSecond from "./screen/ScreenSecond";
import HomeScreen from "./screen/HomeScreen";
import ScreenThird from "./screen/SecondThird";
import ScreenFour from "./screen/SreenFour";
import ScreenFive from "./screen/ScreenFive";
import ScreenSix from "./screen/ScreenSix";
import ScreenSeven from "./screen/ScreenSeven";
import ScreenEight from "./screen/ScreenEight";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScreenFirst" component={ScreenFirst} />
        <Stack.Screen name="ScreenSecond" component={ScreenSecond} />
        <Stack.Screen name="ScreenThird" component={ScreenThird} />
        <Stack.Screen name="ScreenFour" component={ScreenFour} />
        <Stack.Screen name="ScreenFive" component={ScreenFive} />
        <Stack.Screen name="ScreenSix" component={ScreenSix} />
        <Stack.Screen name="ScreenSeven" component={ScreenSeven} />
        <Stack.Screen name="ScreenEight" component={ScreenEight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
