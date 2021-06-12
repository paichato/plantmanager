import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function UserIdentification() {

    const [isFilled,setIsFilled]=useState(false);
    const [isFocused,setIsFocused]=useState(false);
    const [name,setName]=useState('');

    function handleInput(text){
        setName(text);
        setIsFilled(!!text);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputBlur(value){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    return (
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView 
            behavior={Platform.OS ==='ios'? 'padding' : 'height'}
            style={styles.container} >
            <View style={styles.content} >
                <View style={styles.form} >
                <Text style={styles.emoji} >
                        {isFilled? '😁' : '😃'}
                        {/* 😃 */}
                    </Text>
                    <Text style={styles.title} >
                        How can we call you?
                    </Text>
                    
                    <TextInput value={name}
                    onChangeText={handleInput}
                     placeholder="Write a name" 
                     style={[styles.input,(isFocused || isFilled) &&
                      {borderColor:colors.green} ]}
                      onBlur={handleInputBlur}
                      onFocus={handleInputFocus}
                      />
                    <View style={styles.footer}>
                        <Button text="Confirm" />
                    </View>
                   
                </View>
                
            </View>
            </KeyboardAvoidingView>
        
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-around',
    },
    content:{
        flex: 1,
        width: '100%',
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center',
        width: '100%',

    },
    emoji:{
        fontSize:44,
        
    },
    input:{
        borderBottomWidth:1,
        borderColor:colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize:18,
        marginTop:50,
        padding: 10,
        textAlign:'center',
    },
    title:{
        fontSize:24,
        lineHeight:32,
        textAlign:'center',
        color: colors.heading,
        fontFamily:fonts.heading,
        marginTop:20,
    },
    footer:{
        width: '100%',
        marginTop:40,
        paddingHorizontal:20,
    },  
})
