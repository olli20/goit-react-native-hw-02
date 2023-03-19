import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

const background = require("../assets/images/berge.jpg");

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const viewWidth = Dimensions.get("window").width;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.appContainer}>
        <ImageBackground style={styles.background} source={background}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.section}>
              <View style={{ ...styles.avatar, left: viewWidth - viewWidth / 2 - 60 }}>
                <TouchableOpacity style={styles.avatarBtn}></TouchableOpacity>
              </View>
              <Text style={styles.title}>Registration</Text>
                <View style={{...styles.form}}>
                  <View style={styles.inputsContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Login"
                      onFocus={() => {
                        setIsShowKeyboard(true);
                      }}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      onFocus={() => {
                        setIsShowKeyboard(true);
                      }}
                      onBlur={() => {
                        setIsShowKeyboard(false);
                      }}
                    />
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
                      placeholder="Password"
                      onFocus={() => {
                        setIsShowKeyboard(true);
                      }}
                    />
                  </View>
                  <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Sing in</Text>
              </TouchableOpacity>
              <Text style={styles.link}>Already have an account? Login</Text>
              </View>
            </View>  
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  section: {
    position: "relative",
    backgroundColor: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: - 60,
  },
  avatarBtn: {
    position: "absolute",
    width: 26,
    height: 26,
    backgroundColor: "#fff",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#FF6C00",
    bottom: 14,
    left: 106,
  },
  title: {
    marginBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
  },
  inputsContainer: {
    marginBottom: 43,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
  link: {
    textAlign: "center",
  },
});
