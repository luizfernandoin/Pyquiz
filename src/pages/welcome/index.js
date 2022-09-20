import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={styles.Logo}
                resizeMode='contain'
            />

            <Animatable.View animation="fadeInUp">   
                <Text style={styles.title}>Seja bem-vindo ao {'\n'}Pyquiz</Text>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>JOGAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>ESTUDAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>TUTORIAL</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>CRÉDITOS</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    Logo:{
        alignSelf: "center",
        width: '50%',
        height:'30%',
        marginBottom:12
        
    },
    title:{
        textAlign:"center",
        fontSize:30,
        color: 'blue',
        fontWeight:'bold',
        marginBottom:'20%'
    },
    button:{
        position:'relative',
        marginBottom: 15,
        backgroundColor:'blue',
        borderRadius:50,
        paddingVertical: 18,
        width:'80%',
        alignSelf:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#aFFF',
        fontWeight:'bold'
    }
})