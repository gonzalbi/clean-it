import React, { useState,useEffect, useReducer } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import Operation from '../components/Operation';
import CustomButton from '../components/CustomButton';
import InfoSelector from '../components/InfoSelector';
import { useNavigation,StackActions  } from '@react-navigation/native';
import axios from 'axios'

const IGDAScreen = (props) => {
    const navigation = useNavigation();
    const [operations,setOperations] = useState([])

    const [operationData,dispatch] = useReducer(operationReducer, {})

    function operationReducer(state,action){
        switch (action.type) {
            case "add":
                state[action.value.key] = action.value.data
                return state
        }
    }

    const renderOperations = (data) => {
        setOperations(data)
    }

    const handleOperationInfo = (key,data) => {
        dispatch({type : 'add', value : {key : key, data : data}})
    }

    const handleSubmit = async () => {
        let postData = operationData
        let formData = new FormData()

        for(let key in postData){
            formData.append("operationId", key)
            formData.append("operationName", postData[key].name)
            formData.append("score", postData[key].score)
            formData.append("files", {
                id : postData[key].image.imageId,
                uri : postData[key].image.uri,
                name: postData[key].image.name, 
                type : postData[key].image.type
            })
        }

        fetch('http://10.0.2.2:9000/saveOperationData', {
            method: 'POST',
            body: formData,
          }).then(res => {
            console.log(res)
          }).catch(err => {
              console.log(err)
          });

    }

    return (
        <ScrollView style={styles.mainView}>
            <Text style={styles.screenTitle}>Inspeccion generica de ambientes</Text>
            <InfoSelector 
                renderOperations={renderOperations}
            />

            {
                operations.map(operation =>
                    <Operation 
                        idOperation={operation.Id}
                        key={operation.Id}
                        OperationName={operation.Name}
                        updateParent={handleOperationInfo}
                    />
                )
            }

            <CustomButton
                title='Enviar Reporte'
                buttonStyle={styles.buttonSendReport}
                textStyle={styles.textStyle}
                handlePress={() => handleSubmit()}
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
        marginTop: 15,
        backgroundColor : 'rgb(94, 186, 125)',
        padding : 10,
        alignContent: 'center',
    }
})