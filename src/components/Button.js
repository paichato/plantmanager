import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export  function Button({text, ...rest}) {
    return (
        <TouchableOpacity {...rest} style={styles.container} >
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.green,
        height: 56,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:16,
        color: colors.white,
        fontFamily: fonts.heading,
    },
})