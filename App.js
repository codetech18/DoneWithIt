import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import this
import { View } from "react-native";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import HomeScreen from "./app/screens/HomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreens from "./app/screens/ListingScreens";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onsSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput placeholder="Email" icon="email" />
    </Screen>
    // <ListingScreens />
    // <AccountScreen />
    // <Screen>
    //   <ListItem
    //     title="My title"
    //     // subTitle="my subTitle"
    //     ImageComponent={<Icon name="email" />}
    //   />

    // {/* <Icon name="email" size={50} /> */}
    // </Screen>
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <MessagesScreen />
    // </GestureHandlerRootView>
  );
}
