import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import { RectButton } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export default function EnvButton({ title, active = false, ...rest }) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    minWidth: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5,
    padding: 5,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  containerActive: {
    // fontFamily:fonts.heading,
    backgroundColor: colors.green_light,
    // color: colors.green,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
