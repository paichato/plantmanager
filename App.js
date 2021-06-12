import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome';
import {useFonts, Jost_400Regular,Jost_600SemiBold,Jost_700Bold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading';
import UserIdentification from './src/screens/userIdentification';

export default function App() {
  const [fontsLoaded]=useFonts({
    Jost_400Regular,Jost_600SemiBold,Jost_700Bold
  }) //co tinua

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Welcome/> */}
      <UserIdentification/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
