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
} from "react-native";

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const background = require("../assets/images/berge.jpg");

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });
};

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const onSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (!iasReady) {
    return <AppLoading
      startAsync={loadApplication}
      onFinish={() => setIasReady(true)}
      onError={console.warn}
    />
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground style={styles.background} source={background}>
            <View style={{...styles.section, paddingBottom: isShowKeyboard ? 26 : 144}}>
                <Text style={styles.title}>Login</Text>
                <View style={{ ...styles.form }}>
                <KeyboardAvoidingView
                    style={{...styles.inputsContainer, paddingBottom: isShowKeyboard ? 16 : 37 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={state.email}
                        onFocus={() => {
                        setIsShowKeyboard(true);
                        }}
                        onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={state.password}
                        onFocus={() => {
                        setIsShowKeyboard(true);
                        }}
                        onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                    />
                    </KeyboardAvoidingView>
                    <TouchableOpacity onPress={onSubmit} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.link}>Don't have any account? Sign up</Text>
                </View>
            </View>  
        </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  section: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingTop: 32,
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
  title: {
    marginBottom: 33,
    fontSize: 30,
    lineHeight: 35, 
    textAlign: "center",
    letterSpacing: 0.01,
    fontFamily: "Roboto-Medium",
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
  },
  link: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
});
