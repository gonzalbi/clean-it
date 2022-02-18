import React from 'react';
import { View,StyleSheet,Image,Text,TouchableOpacity } from 'react-native';
import images from '../images/index'


function EPPInfo(props) {

    const generateFileName = (str) => {
        return `${props.sectorId}_${props.title}_${str}`.replace(/\s+/g, '_')
    }

    return (
        <View style={styles.Box}>
            <View style={styles.HeaderBox}>
                <Text style={styles.HeaderText}>{props.title}</Text>
            </View>
            <View style={styles.CapacitationFiles}>
                <TouchableOpacity onPress={() => props.handleDownload({
                    url: `entregaRopaZip/${props.sectorId}`, 
                    name : generateFileName('EntregaRopa.zip')
                    })}>
                    <View style={styles.FileBox}>
                        <Image 
                            style={styles.file}
                            source={images.downloadZip}
                        />
                        <Text style={styles.PDFText}>Descargar ultima entrega de Ropa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.handleDownload({
                    url: `entregaEPPZip/${props.sectorId}`, 
                    name :  generateFileName('EntregaEPP.zip')
                    })}>
                    <View style={styles.FileBox}>
                        <Image 
                            style={styles.file}
                            source={images.downloadZip}
                        />
                        <Text style={styles.PDFText}>Descargar ultima entrega de EPP</Text>
                    </View>
                </TouchableOpacity>
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
        width: 20,
        height: 20,
    },
    CapacitationFiles : {
        flex : 1,
        //flexDirection : 'row',
        backgroundColor: "#16262e",
        padding : 5,
        marginTop : 5,
    },
    FileBox : {
        marginHorizontal : 15,
        marginVertical : 10,
        padding : 10,
        //alignItems: "center",
        //alignContent : 'center',
        //textAlign : 'center',
        backgroundColor: "#00A884",
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        //justifyContent : 'center',
    },
    file : {
        width: 50,
        height:50,
        marginRight: 15
    },
    PDFText : {
        color : '#f9f4f5',
        textAlignVertical: 'center'
    }
})