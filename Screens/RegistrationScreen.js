import { StyleSheet, Text, View, ImageBackground } from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground>
        <View></View>
        <Text>Open up App.js to start working on your app!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegistrationScreen;
