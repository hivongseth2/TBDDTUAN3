import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function ScreenFirst() {
  return (
    <LinearGradient
      colors={["rgba(0,156,199,1)", "rgba(255,255,255,1)", "rgba(1,149,223,1)"]}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://www.svgrepo.com/show/175586/circle-outline.svg",
          }}
        />
        <Text style={styles.texth1}>GROW{"\n"}YOUR BUSINESS</Text>

        <Text style={styles.texth3}>
          We will help you to grow your business using online server
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    marginBottom: 70,
    marginTop: 70,
  },
  tinyLogo: {
    height: 200,
    width: 200,
  },
  texth3: {
    fontSize: 17,
    fontWeight: "bold",
    // width: 100,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  texth1: {
    fontSize: 30,
    fontWeight: "bold",
    // width: 200,
    textAlign: "center",
  },
  button: {
    // padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,

    backgroundColor: "#E9B824",
    borderRadius: 10,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
