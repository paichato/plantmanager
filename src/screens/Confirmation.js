import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😊✌
                </Text>
                <Text style={styles.title}>
                    Ready...
                </Text>
                <Text style={styles.subtitle}>
                    Now we are going to take care of your 
                    plants with much care.
                </Text>
            </View>
            <View style={styles.footer}>
                <Button text="Confirm" />
            </View>
           
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',

    },
    content:{

    },
    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        lineHeight:38,
        marginTop:15,
    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        color: colors.heading,
        textAlign:'center',
        paddingVertical:20,
    },
    emoji:{
        fontSize:32,
    },
    footer:{
        width: '100%',
        paddingHorizontal:75,
    },

})
