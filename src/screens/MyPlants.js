import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdrop from "../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import { loadPlants } from "../libs/storage";
import { formatDistance } from "date-fns";
import { enUS, pt } from "date-fns/locale";
import fonts from "../styles/fonts";
import { PlantCardSecondary } from "../components/PlantCardSecondary";

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData() {
    const plantStored = await loadPlants();

    const nextTime = formatDistance(
      new Date(plantStored[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: enUS }
    );

    setNextWaterd(
      `Do not forget to water the ${plantStored[0].name} closely at ${String(nextTime)} o'clock`
    );
    setMyPlants(plantStored);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWaterd}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Next water</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    textAlign: "justify",
  },
  plants: {
    flex: 1,
    width: "100%",
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  },
});
