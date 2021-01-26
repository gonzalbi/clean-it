import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function WelcomeSceen(props) {

    const goToLoginScreen = () => console.log('Al login')

    const goToRegisterScreen = () => console.log('Al Register')

    return (
        <ImageBackground
            source={require('../images/welcomeImage.jpg')}
            style={styles.background}
        >
            <TouchableOpacity style={styles.loginButton} onPress={() => goToLoginScreen()}>
                <Text style={styles.buttonStyle}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={() => goToRegisterScreen()}>
                <Text style={styles.buttonStyle}>Register</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default WelcomeSceen;

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : "flex-end"
    },
    buttonStyle : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: "5%",
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