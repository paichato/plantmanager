import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import colors from '../styles/colors';
import Welcome from '../screens/welcome';
import UserIdentification from '../screens/userIdentification';
import Confirmation from '../screens/Confirmation';

export const StackRoutes=createStackNavigator();

export default function AppRoutes() {
    return (
        <StackRoutes.Navigator headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor:colors.white,
            }
        }}
        >
            <StackRoutes.Screen 
            name="Welcome" component={Welcome}/>
            <StackRoutes.Screen 
            name="UserId" component={UserIdentification}/>
            <StackRoutes.Screen 
            name="Confirmation" component={Confirmation}/>

            

        </StackRoutes.Navigator>
    )
}
