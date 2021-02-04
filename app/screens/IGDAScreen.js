import React from 'react';
import {ScrollView,StyleSheet} from 'react-native'
import {ThemeProvider,ButtonGroup,Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

function IGDAScreen(props) {
    const buttons = ['Hello', 'World', 'Buttons']

    return (
        <ThemeProvider>
            <ScrollView style={styles.mainView}>
            <Button
                title="Locacion"
            />

            <Button
                title="Sector"
            />

            <Button
                title="Sub sector"
            />

            <ButtonGroup   
                buttons={buttons}
                containerStyle={{height: 100}}
            />
            </ScrollView>
        </ThemeProvider>
    );
}

export default IGDAScreen;

const styles = StyleSheet.create({
    mainView :{
        marginTop : 25
    }
})