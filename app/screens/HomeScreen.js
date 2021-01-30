import React from 'react';
import {View,StyleSheet, Text} from 'react-native'
import Card from '../components/Cards'

function HomeScreen(props) {
    return (
        <View>
            <Text>This is jomscrim</Text>
            <Card title={'Card 1'}></Card>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    
})