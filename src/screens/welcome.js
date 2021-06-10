import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

export default function Welcome() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title} >Manage your plants easily</Text>
            <Image source={require('../assets/watering.png')}/>
            <Text style={styles.subtitle} >Don't forget to water your plants. We will remember you whener you need it.</Text>
            <TouchableOpacity style={styles.button} >
                <Text>GO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        
    },
    subtitle:{

    },
    button:{

    },
})