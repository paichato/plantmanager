import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgFromUri } from "react-native-svg";
import waterdrop from "../assets/waterdrop.png";
import Button from "../components/Button";

export default function PlantSave() {
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />
        <Text style={styles.plantName}>Plant Name</Text>
        <Text style={styles.plantDescription}>
          adsadad asd asdasddas dasd asda
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>asdsasaasd dajsaks sdalk</Text>
        </View>

        <Text style={styles.alertLabel}>
          Choose the best time be remembered
        </Text>

        <Button title="Register plant" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
