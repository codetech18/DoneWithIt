import React from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/Forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.page}>
      <Image style={styles.logo} source={require("../assets/logos.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          KeyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          SecureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  page: {
    backgroundColor: colors.medium,
    padding: 10,
  },
});

export default LoginScreen;
