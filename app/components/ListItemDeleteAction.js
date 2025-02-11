import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={35}
            color={colors.medium}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default ListItemDeleteAction;
