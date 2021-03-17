import React, { useState } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import Operation from '../components/Operation';
import CustomButton from '../components/CustomButton';

function IGDAScreen(props) {

    const [modalOpen, setModal] = useState(false);
    const [selectedArray , setSelectedArray] = useState(null)
    const [location,setLocation] = useState('Locacion')
    const [sector,setSector] = useState('Sector')
    const [subsector,setSubSector] = useState('Sub Sector')
    const [selectedOption, setSelectedOption] = useState('')

    const locations = [{title : 'Empresa 1'},{title : 'Empresa 2'},{title : 'Empresa 3'},{title : 'Empresa 4'}]
    const sections = [{title : 'Seccion 1'},{title : 'Seccion 2'},{title : 'Seccion 3'},{title : 'Seccion 4'}]
    const subsections = [{title : 'Subseccion 1'},{title : 'Subseccion 2'},{title : 'Subseccion 3'},{title : 'Subseccion 4'}]

    const renderModal = (items) => {
        return (
            items.map((item,index) => 
                <CustomButton 
                    key={index}
                    id={index}
                    title={item.title}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    handlePress={() =>{
                        switch(selectedOption){
                            case 'Location':
                                setLocation(item.title)
                                break
                            case 'Sector':
                                setSector(item.title)
                                break
                            case 'Subsector':
                                setSubSector(item.title)
                        } 
                        setModal(false)
                        }
                    }
                />
            )
        )
    }

    return (
        <View>
                <Modal visible={modalOpen} animationType='slide'>
                    <ScrollView style={styles.mainView}>
                        <Text style={styles.screenTitle}>Seleccione una opcion</Text>
                        {selectedArray ? renderModal(selectedArray) : ''}
                    </ScrollView>
                </Modal>
            
            <ScrollView style={styles.mainView}>
                <Text style={styles.screenTitle}>Inspeccion generica de ambientes</Text>
                <CustomButton
                    title={location}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    handlePress={() => {
                        setSelectedOption('Location')
                        setSelectedArray(locations)
                        setModal(true)
                        }
                    }
                />
                <CustomButton
                    title={sector}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    handlePress={() => {
                        setSelectedOption('Sector')
                        setSelectedArray(sections)
                        setModal(true)
                        }
                    }
                />

                <CustomButton
                    title={subsector}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    handlePress={() => {
                        setSelectedOption('Subsector')
                        setSelectedArray(subsections)
                        setModal(true)
                        }
                    }
                />

                <Operation 
                    OperationName='Operacion 1'
                />

                <Operation 
                    OperationName='Operacion 2'
                />

                <Operation 
                    OperationName='Operacion 3'
                />
            </ScrollView>
            <CustomButton
                    title='Enviar Reporte'
                    buttonStyle={styles.buttonSendReport}
                    textStyle={styles.textStyle}
                />
        </View>
    );
}

export default IGDAScreen;

const styles = StyleSheet.create({
    screenTitle : {
        fontSize: 20,
        margin: 10,
        marginTop: 10,
        color : '#f9f4f5'
    },
    mainView :{
        marginTop : 0,
        backgroundColor : '#333'
    },
    button : {
        padding : 10,
        margin : 10
    },
    textStyle : {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        color : '#fff'
    },
    buttonStyle : {
        flex : 1,
        backgroundColor : '#2196F3',
        padding : 10,
        margin: 5,
        marginTop : 5,
        alignContent: 'center',
    
    },
    buttonSendReport : {
        backgroundColor : 'rgb(94, 186, 125)',
        padding : 10,
        alignContent: 'center',
    }
})