import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import {StyleSheet,View,Image,TouchableHighlight} from 'react-native';
import ButtonGroup from '../components/ButtonGroup'
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Operation(props) {
    const buttons = ['Excelente', 'Necesita Mejora', 'Atencion inmediata','Sin hacer']
    
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(true);
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }else{
            setImage(null)
        }
      };

    return (
        <View style={styles.conteinerStyle}>
            <Text style={styles.titleStyle}>{props.OperationName}</Text>
            <View style={styles.camera}>
                <TouchableOpacity onPress={pickImage}>
                    {image == null ? (
                    <Image 
                        style={styles.tinyLogo}
                        source={require('../images/photo-camera.png')}
                    />
                    ): (
                        <Image 
                        style={styles.imageBox}
                        source={{uri : image}}
                        /> 
                    )}
                </TouchableOpacity>
            </View>
            <ButtonGroup   
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
        color : '#f9f4f5'
    }
})