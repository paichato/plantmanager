import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import EnvButton from "../components/EnvButton";
import { Header } from "../components/Header";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import api from "../services/api";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Loader } from "../components/Loader";
import localServer from "../services/localServer";
import { useNavigation } from "@react-navigation/native";
// import { FlatList } from "react-native-gesture-handler";

export function PlantSelect() {
  const [environments, setEnvironments] = useState({});
  const [plants, setPlants] = useState({});
  const [envSelected, setEnvSelected] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetchEnvironment();
    fetchPlants();
    // setEnvSelected("all");
  }, []);

  async function fetchEnvironment() {
    const { data } = await api.get(
      "plants_environments?_sort=title&_order=asc"
    );
    // const {data}=localServer.plants_environments;

    setEnvironments([
      {
        key: "all",
        title: "All",
      },
      ...data,
    ]);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (!data) return setLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(plants);
    }

    setLoading(false);
    setLoadMore(false);
  }

  function handleEnvSelected(key) {
    setEnvSelected(key);

    if (key === "all") {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter((plant) => plant.environments.includes(key));
    setFilteredPlants(filtered);
  }

  function handleFetchMore(distance) {
    if (distance < 1) {
      return;
    }
    setLoadMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchPlants();
  }

  if (loading) {
    return <Loader />;
  }

  function handlePlantSelect(plant) {
    navigation.navigate("PlantSave", { plant });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>On wich environment</Text>
        <Text style={styles.subtitle}>you will place your plant? </Text>
      </View>

      <View style={{ width: "100%" }}>
        <FlatList
          // style={{ flex: 1 }}
          style={{ width: "100%" }}
          data={environments}
          keyExtractor={(item) => String(item.key)}
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

      <View style={{ height: "100%", flex: 1 }}>
        {/* // style={styles.plantsContainer} */}
        <FlatList
          style={{ flex: 1 }}
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              onPress={() => handlePlantSelect(item)}
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          alwaysBounceVertical
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => {
            handleFetchMore(distanceFromEnd);
          }}
          ListFooterComponent={
            loadMore ? (
              <ActivityIndicator size="large" color={colors.green} />
            ) : (
              <></>
            )
          }
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
    paddingTop: 35,
    paddingHorizontal: 30,
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
