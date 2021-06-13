import React, { useState,useEffect } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import Operation from '../components/Operation';
import CustomButton from '../components/CustomButton';
import InfoSelector from '../components/InfoSelector';

const IGDAScreen = (props) => {

    return (
        <ScrollView style={styles.mainView}>
            <Text style={styles.screenTitle}>Inspeccion generica de ambientes</Text>
            <InfoSelector />

            <Operation 
                OperationName='Operacion 1'
            />

            <Operation 
                OperationName='Operacion 2'
            />

            <Operation 
                OperationName='Operacion 3'
            />

            <CustomButton
                title='Enviar Reporte'
                buttonStyle={styles.buttonSendReport}
                textStyle={styles.textStyle}
            />
        </ScrollView>
    );
}

export default IGDAScreen;

const styles = StyleSheet.create({
    screenTitle : {
        fontSize: 20,
        margin: 10,
        marginTop: 10,
        color : '#f9f4f5'
    },
    mainView :{
        marginTop : 0,
        backgroundColor : '#333'
    },
    textStyle : {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        color : '#fff'
    },
    buttonSendReport : {
        backgroundColor : 'rgb(94, 186, 125)',
        padding : 10,
        alignContent: 'center',
    }
})