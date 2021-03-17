import React from 'react';
import {ScrollView,StyleSheet, Text} from 'react-native'
import Card from '../components/Cards'
import images from '../images/index'

function HomeScreen(props) {

    return (
            <ScrollView style={styles.mainScren}>
                <Card 
                    title={'Inspeccion'} 
                    description={'Inspeccion generica de ambientes'}
                    path={images.checklist}
                    navigateToScreen={'IDGA'}
                />
                <Card 
                    title={'Entrega y EPP'} 
                    description={'Detalle de entrega y epp por operario y locacion'}
                    path={images.tick}
                    navigateToScreen={'Entrega y EPP'}
                />
                <Card 
                    title={'Capacitaciones'} 
                    description={'Detalle capacitaciones por operario y locacion'}
                    path={images.capacitaciones}
                    navigateToScreen={'Capacitaciones'}
                />
                <Card 
                    title={'Calendario'} 
                    description={'Detalle de proximas fechas'}
                    path={images.calendar}
                    navigateToScreen={'Calendario'}
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