import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {StyleSheet,View,Image,TouchableHighlight} from 'react-native';
import ButtonGroup from '../components/ButtonGroup'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PermissionsAndroid } from 'react-native';

function Operation(props) {
    const buttons = [ 
      {text : 'Excelente', value : 100}, 
      {text : 'Necesita Mejora', value : 75}, 
      {text :'Atencion inmediata', value : 25},
      {text : 'Sin hacer', value : 0}
    ]
    
    const [image, setImage] = useState({});
    const [score, setScore] = useState(null)

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.CAMERA,
                  {
                    title: "App Camera Permission",
                    message:"App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  console.log("Camera permission given");
                } else {
                  console.log("Camera permission denied");
                }
              } catch (err) {
                console.warn(err);
              }
          }
        })();
      }, []);
    
    const pickImage =  () => {
      let options = {
        mediaTypes: 'photo',
        saveToPhotos: true,
        selectionLimit : 1,
        maxHeight: 1000,
        includeBase64 : true
      }

      launchCamera(options, (res) => {
          if (!res.didCancel) {
            let result = res.assets[0]
            result.imageId = `${props.idOperation}`
            result.name = `${props.OperationName}-${props.idOperation}.${result.fileName.split('.')[1]}`
            const action = Object.keys(image).length === 0 && score === null ? 'add' : 'update'
            setImage(result);
            props.updateParent(action, {name: props.OperationName,idOperation: props.idOperation, image : result, score})
          }
        }
      );
    };

    const handleButton = (selectedButton) => {
      const action = Object.keys(image).length === 0 && score === null ? 'add' : 'update'
      setScore(selectedButton.value)
      props.updateParent(action, {name: props.OperationName,idOperation: props.idOperation, image, score : selectedButton.value})
    }

    return (
        <View style={styles.conteinerStyle}>
            <Text style={styles.titleStyle}>{props.OperationName}</Text>
            <View style={styles.camera}>
                <TouchableOpacity onPress={pickImage}>
                    {Object.keys(image).length === 0  ? (
                    <Image 
                        style={styles.tinyLogo}
                        source={require('../images/photo-camera.png')}
                    />
                    ): (
                        <Image 
                        style={styles.imageBox}
                        source={{uri : image.uri}}
                        /> 
                    )}
                    
                </TouchableOpacity>
            </View>
            <ButtonGroup
                onSelectButton = {handleButton}   
                buttons={buttons}
            />
        </View>
    );
}

export default Operation;

const styles = StyleSheet.create({
    conteinerStyle : {
        display : 'flex',
        alignItems : 'flex-start',
        marginTop : 10,
    },
    titleStyle : {
        fontSize : 18,
        margin : 10,
        color : '#f9f4f5'
    },
    camera : {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
        marginTop : 10,
        marginBottom : 10
    },
    tinyLogo: {
        width: 100,
        height: 100,
        margin : 5,
    },
    imageBox : {
        width: 256,
        height: 256,
    }
})