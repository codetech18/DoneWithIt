import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  onPress,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, ImageComponent, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {ImageComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
