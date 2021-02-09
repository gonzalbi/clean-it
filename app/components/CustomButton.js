import React from 'react';
import {TouchableOpacity,Text} from 'react-native'

function CustomButton(props) {
    return (
        <TouchableOpacity id={props.id} style={props.buttonStyle} onPress={props.handlePress}>
                <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
