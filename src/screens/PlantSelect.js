import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import EnvButton from "../components/EnvButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Loader } from "../components/Loader";

export default function PlantSelect() {
  const [environments, setEnvironments] = useState({});
  const [plants, setPlants] = useState({});
  const [envSelected, setEnvSelected] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnvironment();
    fetchPlants();
    // setEnvSelected("all");
  }, []);

  async function fetchEnvironment() {
    const { data } = await api.get(
      "plants_environments?_sort=title&_order=asc"
    );
    setEnvironments([
      {
        key: "all",
        title: "All",
      },
      ...data,
    ]);
  }

  async function fetchPlants() {
    const { data } = await api.get("plants?_sort=name&_order=asc");
    setPlants(data);
    setFilteredPlants(plants);
    setLoading(false);
  }

  function handleEnvSelected(key) {
    setEnvSelected(key);

    if (key === "all") {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) => plant.environments.includes(key));
    setFilteredPlants(filtered);
  }

  if (loading) {
    return <Loader />;
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
          renderItem={({ item }) => (
            <EnvButton
              title={item.title}
              active={item.key === envSelected}
              onPress={() => handleEnvSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.envList}
        />
      </View>

      <View>
        {/* // style={styles.plantsContainer} */}
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // contentContainerStyle={styles.plantsContainer}
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
    marginHorizontal: 30,
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
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  plantsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
