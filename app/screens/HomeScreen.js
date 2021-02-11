import React from 'react';
import {ScrollView,StyleSheet, Text} from 'react-native'
import Card from '../components/Cards'
import images from '../images/index'

function HomeScreen(props) {

    return (
            <ScrollView style={styles.mainScren}>
                <Text></Text>
                <Card 
                    title={'Inspeccion'} 
                    description={'Inspeccion generica de ambientes'}
                    path={images.checklist}
                    navigateToScreen={'IDGA'}
                />
                <Card 
                    title={'Entrega y EPP'} 
                    description={''}
                    path={images.tick}
                    navigateToScreen={''}
                />
                <Card 
                    title={'Capacitaciones'} 
                    description={''}
                    path={images.capacitaciones}
                    navigateToScreen={''}
                />
                <Card 
                    title={'Calendario'} 
                    description={''}
                    path={images.calendar}
                    navigateToScreen={''}
                />
            </ScrollView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    mainScren : {
        overflow : 'hidden',
    }
})