import React, { useState, useReducer } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import Operation from '../components/Operation';
import CustomButton from '../components/CustomButton';
import InfoSelector from '../components/InfoSelector';
import { useNavigation,StackActions  } from '@react-navigation/native';
import config from '../config'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler';

function operationReducer(state,action = {}){

    switch (action.type) {
        case "add":
            state = state ? state : []
            state.push(action.data)
            return state
        case "update":
            let index = state.findIndex( item => item.name === action.data.name)
            state[index] = action.data
            return state
        case "clear":
            return []
    }
}

const IGDAScreen = (props) => {
    const navigation = useNavigation();
    const [subSectId,setSubSectorId] = useState(null)
    const [operations,setOperations] = useState([])
    const [operationData,dispatch] = useReducer(operationReducer, [])
    const [comments, setComments] = useState('')

    const renderOperations = (data,subSectId) => {
        dispatch({type : "clear"})
        setOperations(data)
        setSubSectorId(subSectId)
    }

    const handleOperationInfo = (action,data) => {
        dispatch({type : action, data})
    }

    const checkFields = () => {
        if(operations.length === operationData.length){
            for(const index in operations){
                if(operationData[index]){
                    if(operationData[index].score === null || !Object.keys(operationData[index].image).length){
                        return false
                    } 
                }else{
                    return false
                }
            }
            return true
        }else{
            return false
        }
    }

    const handleSubmit = async () => {

        let formData = new FormData()

        if(!checkFields()){
            alert('Falta completar campos')
            return
        }

        const dataAlreadySaved = await axios(
            `${config.api.local.hostname}:${config.api.local.port}/idga/checkInspection/${subSectId}`,
          );

        if(dataAlreadySaved.data.length > 0){
            //alert('Ya hay datos guardados para hoy, desea sobrescribirlos?')
            //return false
        }

        try{
            for(let i = 0;i < operationData.length; i++){
                formData.append("operationId", operationData[i].idOperation)
                formData.append("operationName", operationData[i].name)
                formData.append("score", operationData[i].score)
                formData.append("files", {
                    uri : operationData[i].image.uri,
                    name: operationData[i].image.name, 
                    type : operationData[i].image.type
                })
                formData.append("comments",comments)
            }
            //navigation.dispatch(StackActions.pop(1))
    
            fetch(`${config.api.local.hostname}:${config.api.local.port}/idga/saveInspection`, {
                method: 'POST',
                body: formData,
              }).then(res => {
                alert('Datos Enviados')
              }).catch(err => {
                  console.log(err)
                  alert('Hubo un error enviando los datos')
              });
        }catch(e) {
            console.log(e)
            alert('Hubo un error procesando datos')
        }


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
                        idOperation={operation.id_operation}
                        key={operation.id_operation}
                        OperationName={operation.name}
                        updateParent={handleOperationInfo}
                    />
                )
            }
            { subSectId 
            ?<>
                <TextInput 
                    placeholder="Ingrese comentarios..."
                    style={styles.textArea}
                      multiline
                      onChangeText={newComments => setComments(newComments)}
                      defaultValue={comments}
                      placeholderTextColor = {'#bfbfbf'}
                />
                <CustomButton
                    title='Enviar Reporte'
                    buttonStyle={styles.buttonSendReport}
                    textStyle={styles.textStyle}
                    handlePress={() => handleSubmit()}
                /> 
            </>
            : null
            }
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
    },
    textArea : {
        color : "#fff",
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14,
        width: 'auto',
        borderColor: '#fff',
        borderWidth: 1,
        padding: 5,
        backgroundColor: "#465362",
    }
})