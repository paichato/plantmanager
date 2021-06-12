import React from 'react'
import { View,Dimensions, Text, Image,
     TouchableOpacity, StyleSheet,
     SafeAreaView } from 'react-native'
import colors from '../styles/colors'
import {Feather} from '@expo/vector-icons'
import fonts from '../styles/fonts'

const windowHeight=Dimensions.get('screen').height

export default function Welcome({navigation}) {

    function handleStart(){
        navigation.navigate('UserId');
    }


    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.wrapper} >
            <Text style={styles.title} >
                Manage your{'\n'} plants easily</Text>
            <Image resizeMode="contain" style={styles.image}
             source={require('../assets/watering.png')}/>
            <Text style={styles.subtitle} >Don't forget 
            to water your plants.
            {'\n'} We will remember you whener{'\n'} you need it.
            </Text>
            <TouchableOpacity
             activeOpacity={0.7} 
            style={styles.button}
            onPress={handleStart}
            >
               
                <Feather name="chevron-right" 
                style={styles.icon}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    wrapper:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20,
    },
    title:{
        fontSize:32,
        // fontWeight:'bold',
        textAlign:'center',
        color: colors.heading,
        marginTop:'20%',
        fontFamily: fonts.heading,
        lineHeight:38,
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color: colors.heading,
        marginBottom:70,
        fontFamily: fonts.text,
    },
    button:{
        backgroundColor:colors.green,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'10%',
        height: 56,
        width: 56,
    },
    image:{
        width: 292,
        height: windowHeight*0.6,
    },
    buttonText:{
        color: colors.white,
    }, 
    icon:{
        fontSize:26,
        color: colors.white,
    }, 
})