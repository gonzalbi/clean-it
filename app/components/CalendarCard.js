import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

function CalendarCard(props) {

    // a and b are javascript Date objects
    const dateDiffInDays = (compareDate) => {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;

        const a = new Date(compareDate)
        const b = new Date()

        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
        const utc2 = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    const diffDays = dateDiffInDays(props.fecha); 
    const dia = diffDays > 1 ? 'dias' : 'día'

    return (
        <View style={[styles.card, diffDays > 7 ? styles.onTime : styles.urgent ]} >
            <Text style={styles.title}>
                {props.title}
                </Text>
            <Text 
                style={styles.description}
                ellipsizeMode='tail'
            >
                {props.description}
            </Text>
            <Text 
                style={styles.description}
                ellipsizeMode='tail'
            >
                Fecha : {props.fecha}
            </Text>
            <Text 
                style={styles.description}
                ellipsizeMode='tail'
            >
                Vencimiento : {diffDays} {dia}
            </Text>
        </View>
    );
}

export default CalendarCard;

const styles = StyleSheet.create({
    card : {
        flex: 1,
        backgroundColor : '#333',
        alignItems : 'flex-start',
        margin: 20,
        padding: 10,
        paddingBottom : 15,
        marginTop: 20,
        borderLeftWidth : 25,
        borderWidth : 5,
        borderRadius : 10,
        borderStyle : 'solid',
        borderColor: '#4062F6',
    },
    title : {
        fontSize : 20,
        fontWeight: 'bold',
        paddingTop: 10,
        marginLeft: 5,
        color : '#fff'
    },
    description : {
        marginLeft: 5,
        marginTop: 10,
        fontSize : 16,
        color : '#fff',
        flexWrap: 'wrap'
    },
    urgent : {
        borderColor: '#D60040',
    },
    onTime : {
        borderColor: '#5DFDCB',
    }
})