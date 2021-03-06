import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../styles/colors'
import userImage from '../assets/marlon.jpg'

import fonts from '../styles/fonts'
import AsyncStorage from '@react-native-async-storage/async-storage'

export  function Header() {

    const [userName, setUserName] = useState('');

    useEffect(()=>{
        loadUserName();
    },[])

    async function loadUserName(){
        const user= await AsyncStorage.getItem('@plantmanager:user');
        setUserName(user);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Hi,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image style={styles.image} source={userImage}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // flex: 1,
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        padding:20,
        // backgroundColor:colors.red,
    },
    greeting:{
        fontSize:32,
        color:colors.heading,
        fontFamily:fonts.text,
    },
    userName:{
        fontSize:32,
        fontFamily:fonts.heading,
        color: colors.heading,
        lineHeight:40,
    },
    image:{
        width: 80,
        height: 80,
        borderRadius:50,
    },
})
