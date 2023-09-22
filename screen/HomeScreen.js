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
    </View>
  );
}
