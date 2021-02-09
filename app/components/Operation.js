import React, { useState } from 'react';
import { Text } from 'react-native';
import {StyleSheet,View} from 'react-native';
import {ThemeProvider,ButtonGroup} from 'react-native-elements'

function Operation(props) {
    const buttons = ['Excelente', 'Necesita Mejora', 'Atencion inmediata','Sin hacer']
    const [selectedIndex,setSelectIndex] = useState(1);

    return (
        <View style={styles.conteinerStyle}>
            <Text style={styles.titleStyle}>{props.OperationName}</Text>
            <ButtonGroup   
                buttons={buttons}
                containerStyle={{height: 100}}
                textStyle={{textAlign: 'center'}}
                selectedButtonStyle={{backgroundColor : 'red'}}
                selectedIndex={selectedIndex}
                onPress={() => console.log(this)}
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
    }
})