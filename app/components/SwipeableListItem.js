import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { RectButton, PanGestureHandler } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SwipeableListItem = ({ children, onSwipeRight }) => {
  const translateX = new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationX > 100) {
        Animated.timing(translateX, {
          toValue: 500,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          onSwipeRight();
        });
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View style={{ transform: [{ translateX }] }}>
        <View style={styles.container}>{children}</View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default SwipeableListItem;
