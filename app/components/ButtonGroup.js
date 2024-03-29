import React, { useState } from 'react';
import { View,StyleSheet,TouchableHighlight,Text } from 'react-native';


function ButtonGroup(props) {

    const [selectedIndex,setSelectIndex] = useState(false);
    const selectThis = (index)  => {
        setSelectIndex(index)
        props.onSelectButton(props.buttons[index])
    }

    return (
        <View style={styles.container}>
            {
                props.buttons.map((item, index) => 
                    <TouchableHighlight 
                        id={index} 
                        key={index} 
                        onPress={() => selectThis(index)}>
                        
                        <View style={[styles.button, index === selectedIndex ? styles.selected : null]} >
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    </TouchableHighlight>
                )
            }
        </View>

    );
}

export default ButtonGroup;

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        marginHorizontal: 5
      },
      button: {
        flex : 1,
        flexWrap : 'wrap',
        alignItems: "center",
        alignContent : 'center',
        backgroundColor: "#465362",
        width : 100,
        justifyContent : 'center',
        borderWidth : 1,
        borderStyle : 'solid',
        borderColor: '#4062F6',
      },
      text : {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15,
        color : '#fff',
        paddingTop : 15,
        paddingBottom : 15,
      },
      selected : {
        backgroundColor: '#4062F6',
      }
})