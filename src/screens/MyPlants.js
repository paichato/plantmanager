import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import waterdrop from "../assets/waterdrop.png";
import { FlatList } from "react-native-gesture-handler";
import { loadPlants, removePlant } from "../libs/storage";
import { formatDistance } from "date-fns";
import { enUS, pt } from "date-fns/locale";
import fonts from "../styles/fonts";
import { PlantCardSecondary } from "../components/PlantCardSecondary";
import { Loader } from "../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const handleRemove = (plant) => {
    Alert.alert("Remove", `Are you willing to remove ${plant.name}`, [
      {
        text: "No 🙌",
        style: "cancel",
      },
      {
        text: "Yes 😢",
        onPress: async () => {
          try {
            
            await removePlant(plant.id)
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert(
              "It was not possible to remove plant. Try again" + error
            );
          }
        },
      },
    ]);
  };

  if (loading) {
    return <Loader />;
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
        style={{ flex: 1 }}
          data={myPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlantCardSecondary
              handleRemove={() => handleRemove(item)}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{height:'100%'}}
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
