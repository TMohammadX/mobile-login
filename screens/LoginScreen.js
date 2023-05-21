import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import {
  auth,
  googleProvider,
  githubProvider,
  gameCenterProvider,
} from "../firebase";
import { Link, useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import g from "../assets/google.png";
import a from "../assets/apple.png";
import ga from "../assets/gas.png";
import image from "../assets/bgg.png";

const LoginScreen = () => {
  const [isError, setIsError] = useState();
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
        WScript;
        console.log("logged in with", user.email);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  };

  const handleGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        WScript;
        console.log("signed in with google: ", user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    auth
      .signInWithPopup(githubProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        WScript;
        console.log("signed in with github:", user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGamecenter = () => {
    auth
      .signInWithPopup(gameCenterProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        WScript;
        console.log("signed in with GameCenter:", user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
            style={[styles.input, isError ? styles.inputE : styles.inputN]}
          />
          <TextInput
            placeholderTextColor="#707070"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[styles.input, isError ? styles.inputE : styles.inputN]}
            secureTextEntry
          />

          <TouchableOpacity style={styles.forgot}>
            Forgot Password
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.others}>
          <Text style={styles.othersTitle}>
            -------- Or Continue With --------
          </Text>
          <View style={styles.othersIcons}>
            <TouchableOpacity style={styles.othersIcon} onPress={handleGoogle}>
              <Image style={styles.iconImage} source={g} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.othersIcon} onPress={handleGithub}>
              {" "}
              <Image style={styles.iconImage} source={a} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.othersIcon}
              onPress={handleGamecenter}
            >
              {" "}
              <Image style={styles.iconImage1} source={ga} />
            </TouchableOpacity>
          </View>
          <Text style={styles.othersMember}>
            <Text>Not a member? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.replace("Signup");
              }}
            >
              <Text style={styles.ot}>Register now</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </view>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    outlineWidth: 0,
  },

  inputN: {
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    fontFamily: "NotoR",
    marginBottom: 5,
    fontSize: 12,
    outlineWidth: 0,
  },

  inputE: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ef476f",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 5,
    fontFamily: "NotoR",
    marginBottom: 5,
    fontSize: 12,
    outlineWidth: 0,
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

    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  iconImage: {
    width: 20,
    height: 20,
  },

  iconImage1: {
    width: 30,
    height: 30,
  },

  othersMember: {
    textAlign: "center",
    marginTop: "20%",
    fontFamily: "NotoL",
    fontSize: 12,
  },

  ot: {
    color: "#ef476f",

    textShadowColor: "#ef476f",
    textShadowOffset: { width: 0, height: 0 },
    textShadowOpacity: 0.1,
    textShadowRadius: 1,
  },
});
