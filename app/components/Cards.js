import React from 'react';
import {View,StyleSheet,Text} from 'react-native'

function Cards(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.Title}</Text>
        </View>
    );
}

export default Cards;

const styles = StyleSheet.create({
    card : {
        flex : 1,
        height : 20,
        backgroundColor : 'blue',
        alignItems : 'center'
    },
    title : {

    }
})