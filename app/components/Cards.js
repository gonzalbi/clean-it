import React from 'react';
import {TouchableOpacity,StyleSheet,Text,Image,View} from 'react-native'

function Cards(props) {
    const imgsource = '../images/checklist.png'
    return (
        <TouchableOpacity style={styles.card}>
            <View>
                <Image 
                    style={styles.tinyLogo}
                    source={props.path}
                />
            </View>
            <View>
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
        backgroundColor : 'grey',
        alignItems : 'flex-start',
        margin: 20,
        padding: 10,
        marginTop: 20,
        flexDirection : 'row'
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
        width: 100,
        height: 100,
        marginTop : 5,
    },
})