import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Screen First"
        onPress={() => navigation.navigate("ScreenFirst")}
      />
      <Button
        title="Go to Screen Second"
        onPress={() => navigation.navigate("ScreenSecond")}
      />
      <Button
        title="Go to Screen Third"
        onPress={() => navigation.navigate("ScreenThird")}
      />
      <Button
        title="Go to Screen Four"
        onPress={() => navigation.navigate("ScreenFour")}
      />
      <Button
        title="Go to Screen Five"
        onPress={() => navigation.navigate("ScreenFive")}
      />
      <Button
        title="Go to Screen Six"
        onPress={() => navigation.navigate("ScreenSix")}
      />
      <Button
        title="Go to Screen Seven"
        onPress={() => navigation.navigate("ScreenSeven")}
      />
      <Button
        title="Go to Screen 8"
        onPress={() => navigation.navigate("ScreenEight")}
      />
    </View>
  );
}
