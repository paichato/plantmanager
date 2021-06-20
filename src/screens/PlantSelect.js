import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EnvButton from "../components/EnvButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";

export default function PlantSelect() {
  const [environments, setEnvironments] = useState({});
  const [plants, setPlants] = useState({});

  useEffect(() => {
    fetchEnvironment();
    fetchPlants();
  }, []);

  async function fetchEnvironment() {
   

    const { data } = await api.get("plants_environments");
    setEnvironments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  }

  async function fetchPlants() {
   

    const { data } = await api.get("plants");
    setPlants(data);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>On wich environment</Text>
        <Text style={styles.subtitle}>you will place your plant? </Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => <EnvButton title={item.title} active />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.envList}
        />
      </View>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <PlantCardPrimary />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 20,
    // alignItems:'center',
    // justifyContent:'center',
  },
  header: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  envList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants:{
    flex:1,
    paddingHorizontal:32,
    justifyContent:"center",
     
  },
});
