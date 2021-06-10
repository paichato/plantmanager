import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome';
import {useFonts, Jost_400Regular,Jost_600SemiBold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded]=useFonts({
    Jost_400Regular,Jost_600SemiBold
  }) //co tinua

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome/>
      
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
