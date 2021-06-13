import React from 'react';
import {TouchableOpacity,Text} from 'react-native'

function CustomButton(props) {
    const buttonEnabled = props.enabled == undefined || props.enabled ? true : false
    
    return (
        <TouchableOpacity 
            id={props.id} 
            style={[props.buttonStyle,buttonEnabled ? null : {'backgroundColor' : 'grey'}  ]} 
            onPress={props.handlePress} 
            disabled={!buttonEnabled}
        >
                <Text style={props.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
