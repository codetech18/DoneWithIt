import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/bg.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logos.png")} />
        <Text style={styles.main_text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 170,
    height: 170,
  },
  logoContainer: {
    position: "absolute",
    top: 75,
    alignItems: "center",
  },
  main_text: {
    color: "#fff",
    top: -35,
    fontSize: 20,
    fontWeight: "500",
  },
});

export default WelcomeScreen;
