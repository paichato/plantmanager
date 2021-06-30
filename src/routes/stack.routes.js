import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";
import { Welcome } from "../screens/welcome";
import { UserIdentification } from "../screens/userIdentification";
import { Confirmation } from "../screens/Confirmation";
import { PlantSelect } from "../screens/PlantSelect";
import { PlantSave } from "../screens/PlantSave";
import MyPlants from "../screens/MyPlants";
// import PlantSave from "../screens/PlantSave";

export const StackRoutes = createStackNavigator();

export default function AppRoutes() {
  return (
    <StackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <StackRoutes.Screen name="Welcome" component={Welcome} />
      <StackRoutes.Screen name="UserId" component={UserIdentification} />
      <StackRoutes.Screen name="Confirmation" component={Confirmation} />
      <StackRoutes.Screen name="PlantSelect" component={PlantSelect} />
      <StackRoutes.Screen name="PlantSave" component={PlantSave} />
      <StackRoutes.Screen name="MyPlants" component={MyPlants} />
    </StackRoutes.Navigator>
  );
}
