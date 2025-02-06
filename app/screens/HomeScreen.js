import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.close}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.minimize}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/main.jpeg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  close: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  minimize: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
