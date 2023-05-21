import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useCallback } from "react";
import img from "../assets/ss.png";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/core";
import image from "../assets/bgg.png";

SplashScreen.preventAutoHideAsync();

const MainScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    NotoL: require("../assets/fonts/NotoSansJP-Light.ttf"),
    NotoR: require("../assets/fonts/NotoSansJP-Regular.ttf"),
    NotoS: require("../assets/fonts/NotoSansJP-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
        <Image style={styles.image} source={img} />
        <View styles={styles.texts}>
          <Text style={styles.text}>Discover your </Text>
          <Text style={styles.text}>Dream job Here </Text>

          <Text style={styles.p}>
            Explore all the most exiting jobs roles based on your intrest and
            study major.
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonr]}
            onPress={() => {
              navigation.replace("Signup");
            }}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  bgimage: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  image: {
    width: "95%",
    height: "50%",
    marginTop: "10%",
    borderRadius: 10,
    marginBottom: 60,
  },

  texts: {
    textAlign: "center",
    width: "100%",
  },

  text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 30,
    fontFamily: "NotoS",
  },

  p: {
    textAlign: "center",
    width: 250,
    marginTop: 20,
    color: "#707070",
    fontFamily: "NotoL",
    fontSize: 13,
  },

  buttons: {
    position: "absolute",
    bottom: 30,
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    width: "70%",
    height: 50,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },

  button: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonr: {
    backgroundColor: "#ef476f",

    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
