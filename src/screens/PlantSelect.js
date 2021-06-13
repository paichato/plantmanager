import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../components/Header'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function PlantSelect() {
    return (
        <View style={styles.container} >
           
                <Header/>
                <View style={styles.header} >
                <Text style={styles.title} >On wich environment</Text>
                <Text style={styles.subtitle} >you will place your plant? </Text>
                </View>
          
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.background,
        marginTop:20,
        // alignItems:'center',
        // justifyContent:'center',
    },
    header:{
        paddingHorizontal:20,
    },
    title:{
        fontSize:17,
        color:colors.heading,
        fontFamily:fonts.heading,
        lineHeight:20,
        marginTop:15,
    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        lineHeight:20,
        color: colors.heading,
    },
})