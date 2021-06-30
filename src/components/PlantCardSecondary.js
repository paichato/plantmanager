import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { SvgFromUri } from "react-native-svg";

export function PlantCardSecondary({ data, ...rest }) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri width={50} height={50} uri={data.photo} />

      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.details}>
        <Text style={styles.timeLabel}>Water at</Text>
        <Text style={styles.time}>{data.hour}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.shape,
    marginVertical: 5,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontFamily: fonts.heading,
    fontSize: 17,
    color: colors.heading,
  },
  details: {
    alignItems: "flex-end",
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light,
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_light,
  },
});
