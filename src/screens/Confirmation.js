
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
                    🎍
                </Text>
                <Text style={styles.title}>
                    Well done
                </Text>
                <Text style={styles.subtitle}>
                    Now we are going to take care of {'\n'}your 
                    plants with much care.
                </Text>
            
                <View style={styles.footer}>
                    <Button text="Confirm" />
                </View>
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
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        // padding: 30,
        width: '100%',
        // padding: 30,

    },
    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        lineHeight:38,
        marginTop:15,
        color: colors.heading,
        textAlign:'center',
    },
    subtitle:{
        fontFamily:fonts.text,
        fontSize:17,
        color: colors.heading,
        textAlign:'center',
        paddingVertical:20,
    },
    emoji:{
        fontSize:78,
    },
    footer:{
        width: 200,
        // paddingHorizontal:50,
    },

})
