import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

function WelcomeScreen({navigation}) {

    const goToLoginScreen = () => navigation.navigate('Login')

    const goToRegisterScreen = () => navigation.navigate('Register')

    return (
        <ImageBackground
            source={require('../images/welcomeImage.jpg')}
            style={styles.background}
        >
            <Text style={styles.welcomeText}>Sistema de Gestion</Text>
            <CustomButton 
                buttonStyle={styles.loginButton}
                textStyle={styles.buttonStyle}
                title='Login'
                handlePress={goToLoginScreen}
            />

            <CustomButton 
                buttonStyle={styles.registerButton}
                textStyle={styles.buttonStyle}
                title='Register'
                handlePress={goToRegisterScreen}
            />
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : "flex-end"
    },
    welcomeText : {
        fontSize : 26,
        fontWeight : 'bold',
        textAlign : 'center',
        marginBottom : '120%',
        textDecorationStyle : 'solid'
    },
    buttonStyle : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: "5%",
        color : '#fff'
    },
    loginButton : {
        width : '100%',
        height : 70,
        backgroundColor : '#fc5c65',
    },
    registerButton : {
        width : '100%',
        height : 70,
        backgroundColor : '#4ecdc4',
    }
})