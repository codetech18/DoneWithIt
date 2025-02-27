import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => setModalVisible(true)}
        accessible={true}
        accessibilityLabel="Open Picker"
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={[styles.text, !selectedItem && styles.placeholder]}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          {items.length > 0 ? (
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          ) : (
            <Text style={styles.noItems}>No items available</Text>
          )}
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    color: defaultStyles.colors.dark,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.dark,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
  },
  noItems: {
    textAlign: "center",
    marginTop: 20,
    color: defaultStyles.colors.medium,
  },
});

export default AppPicker;
