import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome';
import {useFonts, Jost_400Regular,Jost_600SemiBold,Jost_700Bold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading';
import UserIdentification from './src/screens/userIdentification';
import Confirmation from './src/screens/Confirmation';
import Routes from './src/routes'
import * as Notifications from 'expo-notifications'

export default function App() {
  const [fontsLoaded]=useFonts({
    Jost_400Regular,Jost_600SemiBold,Jost_700Bold
  }) //co tinua

  // useEffect(() => {
  //   const subscription = Notifications.addNotificationReceivedListener(
  //     async notification=>{
  //       const data=notification.request.data.plant;
  //       console.log(data);
  //     })
  //     return ()=>subscription.remove();
  // },[])

  if(!fontsLoaded){
    return <AppLoading/>
  }

 

  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   {/* <Welcome/> */}
    //   {/* <UserIdentification/> */}
    //   <Confirmation/>
      
    // </View>
    <Routes/>
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
