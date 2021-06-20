
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function EnvButton({title, active=false,...rest}) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Text style={styles.text} >{title}</Text>
        </RectButton>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.shape,
        width: 76,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
    },
    text:{
        color: colors.heading,
        fontFamily:fonts.text,
    },
    containerActive:{

    },
    textActive:{

    },
})
