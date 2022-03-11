import React, { useState,useEffect } from 'react';
import {ScrollView,StyleSheet,View,PermissionsAndroid} from 'react-native'
import CapacitationInfo from '../components/CapacitationInfo';
import LocationSelector from '../components/LocationSelector';
import axios from 'axios'
import config from '../config'
import RNFetchBlob from 'rn-fetch-blob'


const askPermission = async (file) => {
    
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          download(file);
        } else {
          Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
        }
      } catch (err) {
        console.warn(err);
      }
}

const download = async (file) => {

    const { dirs } = RNFetchBlob.fs;
    RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        path: `${dirs.DownloadDir}/${file.name}`,
        },
    })
    .fetch('GET', file.url, {})
    .then((res) => {
      console.log('The file saved to ', res.path());
      alert(`Archivo descargado en ${dirs.DownloadDir}/${file.name}`)
    })
    .catch((e) => {
      console.log(e)
    });
  };


function CapacitationScreen(props) {

    const [sectors , setSectors] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null)
    
    useEffect(() => {
        if(selectedLocation){
            const id_operation = selectedLocation.id_location

            const getEppInfo = async (id_operation) => {
                const result = await axios(
                    `${config.api.local.hostname}:${config.api.local.port}/epp/getOperatorsBySector/${id_operation}`,
                  );
                return result.data
            }
  
            getEppInfo(id_operation)
                .then(res => {
                    setSectors(res)
                })
                .catch(e => {
                    setSectors([])
                    console.log(`Error getting epp info: ${e}`)
                });

        }
     }, [selectedLocation]);

    const handleDownload = async (fileinfo) => {
        fileinfo.url = `${config.api.local.hostname}:${config.api.local.port}/capacitations/${fileinfo.url}`
        await askPermission(fileinfo)
    }

    return (
        <View>
            <ScrollView style={styles.mainView}>
                <LocationSelector 
                    setSelectedLocation={setSelectedLocation}
                />
                {
                    sectors.map(sector =>
                        <CapacitationInfo 
                            title={sector.name}
                            key={sector.id_sector}
                            sectorId={sector.id_sector}
                            handleDownload = {handleDownload}
                        />
                    )
                }

            </ScrollView>
        </View>
    );
}

export default CapacitationScreen;

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
})