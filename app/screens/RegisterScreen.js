import React, {useState} from 'react';
import { ImageBackground, TextInput, StyleSheet,Text, Button } from 'react-native';

function RegisterScreen(props) {

    const [username, setUserName] = useState(username)
    const [password, setPassword] = useState(password)

    const tryLogin = () => {
        //TODO LOGIN FUNCTION
    }
    return (
        <ImageBackground
            source={require('../images/welcomeImage.jpg')}
            style={styles.background}
        >
            <TextInput
                style={styles.input} 
                placeholder = 'Username'
                onChangeText = {(val) => setUserName(val)}
            />
            <TextInput 
                style={styles.input}
                placeholder = 'Password'
                onChangeText = {(val) => setPassword(val)}
                secureTextEntry={true}
            />

            <Button 
                style={styles.loginButton}
                title="Login"
                onPress={() => tryLogin()}
            />
        </ImageBackground>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : "center",
        backgroundColor: '#fff'
    },
    input : {
        borderWidth : 1,
        borderColor : "#fff",
        margin : 10,
        backgroundColor : '#fff',
        padding : 10,
        height : 50,
        width : '100%',
        textAlign : 'center'
    },
    loginButton : {
    }
})