import React,{ useState,useEffect } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import CustomButton from '../components/CustomButton';
import axios from 'axios'

function InfoSelector(props) {
    
    const [modalOpen, setModal] = useState(false);
    const [selectedArray , setSelectedArray] = useState(null)
    const [location,setLocation] = useState('Locacion')
    const [sector,setSector] = useState('Sector')
    
    const [enableSector,setEnableSector] = useState(false)
    const [enableSubSector,setEnableSubSector] = useState(false)

    const [subsector,setSubSector] = useState('Sub Sector')
    const [selectedOption, setSelectedOption] = useState('')

    const [locationData,setLocationData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
              'http://66.97.45.119:9000/getLocationData',
            );

            setLocationData(result.data)
          };
       
          fetchData();
    }, [])

    const renderModal = (items) => {
        return (
            items.map((item,index) => 
                <CustomButton 
                    key={index}
                    id={index}
                    title={item}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={true}
                    handlePress={() =>{
                        switch(selectedOption){
                            case 'Location':
                                setLocation(item)
                                setSector('Sector')
                                setEnableSector(true)
                                setSubSector('Sub Sector')
                                setEnableSubSector(false)
                                break
                            case 'Sector':
                                setSector(item)
                                setSubSector('Sub Sector')
                                setEnableSubSector(true)
                                break
                            case 'Subsector':
                                setSubSector(item)
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
            

            <CustomButton
                    title={location}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={true}
                    handlePress={() => {
                        setSelectedOption('Location')
                        setSelectedArray(locationData.map( item => item.Name))
                        setModal(true)
                        }
                    }
                />
                <CustomButton
                    title={sector}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={enableSector}
                    handlePress={() => {
                        setSelectedOption('Sector')
                        setSelectedArray(locationData.filter(x => x.Name == location)[0].Sectors.map( item => item.Name))
                        setModal(true)
                        }
                    }
                />

                <CustomButton
                    title={subsector}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={enableSubSector}
                    handlePress={() => {
                        setSelectedOption('Subsector')
                        setSelectedArray(
                            locationData.filter(x => x.Name == location)[0].Sectors.filter( x => x.Name == sector)[0].SubSectors.map(x => x.Name)
                        )
                        setModal(true)
                        }
                    }
                />
        </View>
    );
}

export default InfoSelector;

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
})