import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';
import images from '../images/index'


function Capacitation(props) {
    return (
        <View style={styles.Box}>
            <View style={styles.HeaderBox}>
                <Image 
                    style={styles.tinyLogo}
                    source={Math.round(Math.random()) > 0.5 ? images.check : images.cross}
                />
                <Text style={styles.HeaderText}>{props.title}</Text>
            </View>
            <View style={styles.SubHeaderBox}>
                <Text style={styles.SubHeaderText}>Sector</Text>
            </View>
            <View style={styles.CapacitationFiles}>
                <View style={styles.FileBox}>
                    <Image 
                        style={styles.file}
                        source={images.pdf}
                    />
                    <Text style={styles.PDFText}>Capacitacion 1</Text>
                </View>
                <View style={styles.FileBox}>
                    <Image 
                        style={styles.file}
                        source={images.pdf}
                    />
                    <Text style={styles.PDFText}>Capacitacion 2</Text>
                </View>
            </View>
        </View>
    );
}

export default Capacitation;

const styles = StyleSheet.create({
    Box : {
        margin : 5,
        marginTop : 20
    },
    HeaderBox : {
        flex : 1,
        flexDirection : 'row',
        alignItems: "center",
        alignContent : 'center',
        backgroundColor: "#16262e",
        padding : 10
    },
    SubHeaderBox : {
        flex : 1,
        flexDirection : 'row',
        alignItems: "center",
        alignContent : 'center',
        backgroundColor: "#16262e",
        padding : 10,
        marginTop : 5
    },
    SubHeaderText: {
        fontSize : 16,
        fontWeight : 'bold',
        color : '#f9f4f5'
    },
    HeaderText : {
        fontSize : 18,
        fontWeight : 'bold',
        padding : 10,
        color : '#f9f4f5'
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
    CapacitationFiles : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor: "#16262e",
        padding : 10,
        marginTop : 5,

    },
    FileBox : {
        marginRight : 40,
        marginLeft : 40,
        alignItems: "center",
        alignContent : 'center',
        textAlign : 'center',
        backgroundColor: "#16262e",
        justifyContent : 'center',
    },
    file : {
        width: 80,
        height:80,
    },
    PDFText : {
        color : '#f9f4f5'
    }
})