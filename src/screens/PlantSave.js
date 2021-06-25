import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import waterdrop from "../assets/waterdrop.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";
// import DatePicker from "react-native-date-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params;

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selected, setSelected] = useState(false);

  function handleChangeTime(event, dateTime) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }
    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro ⏰ ");
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
      setSelected(true);
    }
  }

  function handlePickerButton() {
    setShowDatePicker(true);
    // selected ? null : set
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantDescription}>{plant.about}</Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            is24Hour
            onChange={handleChangeTime}
          />
        )}
        <TouchableOpacity
          style={selected ? styles.pickerButtonSelected : styles.pickerButton}
          onPress={handlePickerButton}
        >
          <Text
            style={
              selected
                ? styles.plantDescriptionSelected
                : styles.plantDescription1
            }
          >
            {selected
              ? `Change ${format(selectedDateTime, "HH:mm")}`
              : "Pick time"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.alertLabel}>
          Choose the best time be remembered
        </Text>

        <Button text="Register plant" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.shape,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantDescription: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  plantDescription1: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    // marginTop: 10,
  },
  plantDescriptionSelected: {
    textAlign: "center",
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    // marginTop: 10,
  },
  tipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: "relative",
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: "justify",
  },
  alertLabel: {
    textAlign: "center",
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
  pickerButton: {
    height: 50,
    width: "40%",
    backgroundColor: colors.green_light,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    // opacity: ,
  },
  pickerButtonSelected: {
    height: 50,
    width: "40%",
    backgroundColor: colors.blue_light,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    // opacity: 1,
  },
});
