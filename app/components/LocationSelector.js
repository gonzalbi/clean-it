import React,{ useState,useEffect } from 'react';
import {ScrollView,StyleSheet,Text,Modal,View} from 'react-native'
import CustomButton from '../components/CustomButton';
import axios from 'axios'
import config from '../config'

function LocationSelector(props) {
    
    const [modalOpen, setModal] = useState(false);
    const [selectedArray , setSelectedArray] = useState(null)
    const [location,setLocation] = useState('Locacion')

    const [selectedOption, setSelectedOption] = useState('')

    const [locationData,setLocationData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
              `${config.api.local.hostname}:${config.api.local.port}/idga/getLocations`,
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
                    title={item.name}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    enabled={true}
                    handlePress={() =>{
                        setLocation(item.name)
                        props.setSelectedLocation(item)
                        setModal(false)
                        }
                    }
                />
            )
        ) :
        <Text  style={[styles.screenTitle,{textAlign: 'center',}]}>No hay datos para este {selectedOption}</Text>

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
        </View>
    );
}

export default LocationSelector;

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