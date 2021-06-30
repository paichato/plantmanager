import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdrop from "../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import { loadPlants } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

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
      new date(plantStored[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    setNextWaterd(
      `Do not forget to water the ${plantStored[0].name} at ${nextTime} o'clock`
    );
    setMyPlants(plantStored);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextTime}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Next water</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            <Text>Elemento</Text>;
          }}
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
});
