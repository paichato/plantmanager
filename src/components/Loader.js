import LottieView from "lottie-react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieLoader from "../assets/load.json";

export function Loader() {
  return (
    <View style={styles.container}>
      <LottieView
        source={LottieLoader}
        autoPlay
        loop
        style={styles.animation}
      ></LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    backgroundColor: "transparent",
    width: 200,
    height: 200,
  },
});
