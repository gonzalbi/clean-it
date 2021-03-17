import React from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import CalendarCard from '../components/CalendarCard';

function CalendarScreen(props) {
    return (
        <View>
            <ScrollView>
                <CalendarCard 
                    title={'Revision'}
                    description={'Revision mensual de subsector 3'}
                    fecha={'2021-03-16'}
                />
                <CalendarCard 
                    title={'EPP Devolucion'}
                    description={'Devolucion de informe EPP'}
                    fecha={'2021-03-11'}
                />
                <CalendarCard 
                    title={'Capacitacion'}
                    description={'Proxima capacitacion ISO 9001'}
                    fecha={'2021-02-15'}
                />
            </ScrollView>
        </View>
    );
}

export default CalendarScreen;

const styles = StyleSheet.create({
    
})