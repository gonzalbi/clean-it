import React, { useState } from 'react';
import { Text } from 'react-native';
import {StyleSheet,View,Image} from 'react-native';
import {ThemeProvider,ButtonGroup} from 'react-native-elements'

function Operation(props) {
    const buttons = ['Excelente', 'Necesita Mejora', 'Atencion inmediata','Sin hacer']
    const [selectedIndex,setSelectIndex] = useState(0);

    const updateIndex = (item) => {
        console.log(item)
    }

    return (
        <View style={styles.conteinerStyle}>
            <Text style={styles.titleStyle}>{props.OperationName}</Text>
            <View style={styles.camera}>
                <Image 
                    style={styles.tinyLogo}
                    source={require('../images/photo-camera.png')}
                />
            </View>
            <ButtonGroup   
                buttons={buttons}
                containerStyle={{height: 100}}
                textStyle={{textAlign: 'center',fontWeight : '600'}}
                selectedButtonStyle={{backgroundColor : '#2196F3'}}
                selectedIndex={selectedIndex}
                onPress={() => updateIndex(item)}
            />
        </View>
    );
}

export default Operation;

const styles = StyleSheet.create({
    conteinerStyle : {
        display : 'flex',
        alignItems : 'flex-start',
        marginTop : 10
    },
    titleStyle : {
        fontSize : 18,
        margin : 10
    },
    camera : {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%'
    },
    tinyLogo: {
        width: 100,
        height: 100,
        margin : 5,
    }
})