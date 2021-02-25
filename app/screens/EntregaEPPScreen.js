import React, { useState } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import CustomButton from '../components/CustomButton';
import EPPInfo from '../components/EPPInfo';

function CapacitacionesScreen(props) {

    const [modalOpen, setModal] = useState(false);
    const [selectedArray , setSelectedArray] = useState(null)
    const [location,setLocation] = useState('Locacion')
    const [selectedOption, setSelectedOption] = useState('')

    const locations = [{title : 'Empresa 1'},{title : 'Empresa 2'},{title : 'Empresa 3'},{title : 'Empresa 4'}]

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
                <EPPInfo 
                    title='Operario 1'
                />
                <EPPInfo 
                    title='Operario 2'
                />
                <EPPInfo 
                    title='Operario 3'
                />
            </ScrollView>
        </View>
    );
}

export default CapacitacionesScreen;

const styles = StyleSheet.create({
    screenTitle : {
        fontSize: 20,
        margin: 10,
        marginTop: 10,
    },
    mainView :{
        marginTop : 0
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
    },
    scoreBox : {
        backgroundColor : 'rgb(94, 186, 125)',
        padding : 10,
        alignContent: 'center',
        marginHorizontal : 10,
        marginTop : 10
    },
    scoreText : {
        textAlign : 'center',
        fontSize : 16,
        fontWeight : 'bold'
    }
})