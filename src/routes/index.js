import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppRoutes, { StackRoutes } from './stack.routes'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}
