import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <ImageBackground
        style={styles.background}
        source={require("./assets/images/berge.jpg")}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Registration</Text>
          <TextInput style={styles.input} placeholder="Login" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sing in</Text>
          </TouchableOpacity>
          <Text>Already have an account? Login</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#fff",
    textAlign: "center",
    paddingHorizontal: 15,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
  },
  input: {
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
});
