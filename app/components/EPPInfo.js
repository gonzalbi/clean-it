import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';
import images from '../images/index'


function EPPInfo(props) {
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
                    <Text>Ultima entrega de Ropa</Text>
                </View>
                <View style={styles.FileBox}>
                    <Image 
                        style={styles.file}
                        source={images.pdf}
                    />
                    <Text>Ultima entrega de EPP</Text>
                </View>
            </View>
        </View>
    );
}

export default EPPInfo;

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
        backgroundColor: "#DDDDDD",
        padding : 10
    },
    SubHeaderBox : {
        flex : 1,
        flexDirection : 'row',
        alignItems: "center",
        alignContent : 'center',
        backgroundColor: "#DDDDDD",
        padding : 10,
        marginTop : 5
    },
    SubHeaderText: {
        fontSize : 16,
        fontWeight : 'bold',
    },
    HeaderText : {
        fontSize : 18,
        fontWeight : 'bold',
        padding : 10
    },
    tinyLogo: {
        width: 30,
        height: 30,
    },
    CapacitationFiles : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor: "#DDDDDD",
        padding : 10,
        marginTop : 5,

    },
    FileBox : {
        marginHorizontal : 20,
        alignItems: "center",
        alignContent : 'center',
        textAlign : 'center',
        backgroundColor: "#DDDDDD",
        justifyContent : 'center',
    },
    file : {
        width: 80,
        height:80,
    }
})