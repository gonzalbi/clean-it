import React,{ useState,useEffect } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import CustomButton from '../components/CustomButton';
import axios from 'axios'
import config from '../config'

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
              `${config.api.local.hostname}:${config.api.local.port}/idga/getLocationData`,
            );

            return(result.data)
          };
       
          fetchData()
            .then(res => setLocationData(res))
            .catch(e => {
                setLocationData([])
                console.log(`Error getting location data: ${e}`)
            });
    }, [])

    const renderModal = (items) => {
        return items.length > 0 ? (
            items.map((item,index) => 
                <CustomButton 
                    key={index}
                    id={index}
                    title={item.Name}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={true}
                    handlePress={() =>{
                        switch(selectedOption){
                            case 'Location':
                                setLocation(item.Name)
                                setSector('Sector')
                                setEnableSector(true)
                                setSubSector('Sub Sector')
                                setEnableSubSector(false)
                                break
                            case 'Sector':
                                setSector(item.Name)
                                setSubSector('Sub Sector')
                                setEnableSubSector(true)
                                break
                            case 'Subsector':
                                setSubSector(item.Name)
                                getOperations(item.Id)
                                break
                        } 
                        setModal(false)
                        }
                    }
                />
            )
        ) :
        <Text  style={[styles.screenTitle,{textAlign: 'center',}]}>No hay datos para este {selectedOption}</Text>

    }

    const getOperations = async (subSectId) =>{
        const result = await axios(
            `${config.api.local.hostname}:${config.api.local.port}/idga/getOperations/${subSectId}`,
        );
        props.renderOperations(result.data,subSectId)
    }

    return (
        <View>
            <Modal visible={modalOpen} 
                animationType='slide'
                onRequestClose={() => { setModal(false) } }
            >
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
                        setSelectedArray(locationData.map( item => item))
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
                        setSelectedArray(locationData.find(x => x.Name == location).Sectors.map( item => item))
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
                        setSelectedArray(locationData.find(x => x.Name == location).Sectors.find( x => x.Name == sector).SubSectors.map(x => x))
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