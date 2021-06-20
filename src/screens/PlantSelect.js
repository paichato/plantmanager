import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EnvButton from "../components/EnvButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";

export default function PlantSelect() {
  const [environments, setEnvironments] = useState({});

  useEffect(() => {
    fetchEnvironment();
  }, []);

  async function fetchEnvironment() {
    await api;

    const { data } = await api.get("plants_environments");
    setEnvironments([
      {
        key:'all',
        title:'Todos'
      },
      ...data
    ]);
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
});
