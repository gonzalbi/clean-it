import React from 'react';
import {TouchableOpacity,StyleSheet,Text,Image,View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Cards(props) {
    const navigation = useNavigation();
    const goToScreen = () => {
        navigation.navigate(props.navigateToScreen)
    }

    return (
        <TouchableOpacity style={styles.card} onPress={() => goToScreen()}>
            <View>
                <Image 
                    style={styles.tinyLogo}
                    source={props.path}
                />
            </View>
            <View style={styles.descriptionBox}>
                <Text style={styles.title}>{props.title}</Text>
                <Text 
                    style={styles.description}
                    ellipsizeMode='tail'
                    >
                    {props.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Cards;

const styles = StyleSheet.create({
    card : {
        backgroundColor : '#333',
        alignItems : 'flex-start',
        margin: 20,
        padding: 10,
        paddingBottom : 15,
        marginTop: 20,
        flexDirection : 'row',
        borderWidth : 5,
        borderRadius : 5,
        borderStyle : 'solid',
        borderColor: '#4062F6',
    },
    descriptionBox :{
        flex: 1,
    },
    title : {
        fontSize : 20,
        fontWeight: 'bold',
        paddingTop: 10,
        marginLeft: 10,
        color : '#fff'
    },
    description : {
        marginLeft: 10,
        marginTop: 10,
        fontSize : 16,
        color : '#fff',
        flexWrap: 'wrap'
        
    },
    tinyLogo: {
        width: 80,
        height: 80,
        marginTop : 5,
    },
})