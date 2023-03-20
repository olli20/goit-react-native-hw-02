import React from "react";
import { StyleSheet, View } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
