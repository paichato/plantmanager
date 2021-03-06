import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { SvgFromUri } from "react-native-svg";

export function PlantCardPrimary({ data, ...rest }) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri width={70} height={70} uri={data.photo} />
      <Text style={styles.text}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "45%",
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
});
