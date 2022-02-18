import React, { useState,useEffect } from 'react';
import {ScrollView,StyleSheet,View,PermissionsAndroid} from 'react-native'
import EPPInfo from '../components/EPPInfo';
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


function EntregaEPPScreen(props) {

    const [sectors , setSectors] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null)
    
    useEffect(() => {
        if(selectedLocation){
            const locationId = selectedLocation.Id

            const getEppInfo = async (locationId) => {
                const result = await axios(
                    `${config.api.local.hostname}:${config.api.local.port}/epp/getEPPInfo/${locationId}`,
                  );
                return result.data
            }
  
            getEppInfo(locationId)
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
        fileinfo.url = `${config.api.local.hostname}:${config.api.local.port}/epp/${fileinfo.url}`
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
                        <EPPInfo 
                            title={sector.Name}
                            key={sector.Id}
                            sectorId={sector.Id}
                            handleDownload = {handleDownload}
                        />
                    )
                }

            </ScrollView>
        </View>
    );
}

export default EntregaEPPScreen;

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
        fontWeight : 'bold',
        color : '#f9f4f5'
    }
})