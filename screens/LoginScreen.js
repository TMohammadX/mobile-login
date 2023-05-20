import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { auth } from "../firebase";
import { Link, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("logged in with", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const [fontsLoaded] = useFonts({
    NotoL: require("../assets/fonts/NotoSansJP-Light.ttf"),
    NotoR: require("../assets/fonts/NotoSansJP-Regular.ttf"),
    NotoS: require("../assets/fonts/NotoSansJP-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <view style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Hello Again!</Text>
        <Text style={styles.titleSub}>
          Welcome back you've {"\n"} been missed!
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor="#707070"
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholderTextColor="#707070"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Text style={styles.forgot}>Forgot Password</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.others}>
        <Text style={styles.othersTitle}>Or Continue With</Text>
        <View style={styles.othersIcons}>
          <TouchableOpacity style={styles.othersIcon}></TouchableOpacity>
          <TouchableOpacity style={styles.othersIcon}></TouchableOpacity>
          <TouchableOpacity style={styles.othersIcon}></TouchableOpacity>
        </View>
        <Text style={styles.othersMember}>Not a member? Register now</Text>
      </View>
    </view>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  title: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: 30,
  },

  titleText: {
    fontFamily: "NotoS",
    fontSize: 23,
    marginBottom: 10,
  },

  titleSub: {
    fontFamily: "NotoL",
    fontSize: 17,
  },

  inputContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    fontFamily: "NotoR",
    marginBottom: 5,
    fontSize: 12,
  },

  forgot: {
    fontFamily: "NotoR",
    fontSize: 11,
    color: "#707070",
    marginTop: 5,
    alignSelf: "flex-end",
  },

  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  button: {
    backgroundColor: "#ef476f",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignItems: "center",
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },

  buttonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "NotoR",
  },

  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },

  others: {
    height: "30%",
    paddingTop: "10%",
  },

  othersTitle: {
    color: "#707070",
    fontFamily: "NotoR",
    fontSize: 11,
    textAlign: "center",
    marginTop: "10%",
  },

  othersIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: "20%",
  },

  othersIcon: {
    height: 60,
    width: 70,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },

  othersMember: {
    textAlign: "center",

    marginTop: "20%",
  },
});
