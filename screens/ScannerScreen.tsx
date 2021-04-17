import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { StackScreenProps } from '@react-navigation/stack';
import { CleanItem, getTransportColors, RootStackParamList, TransportTypes } from '../types';
type props = StackScreenProps<RootStackParamList, 'Scanner'>
let fleetAssocator = (a : string) => {if(a < '333') {return 'AKCY'} if(a < '666') {return 'SFGT'} else {return 'JGUD'}} 

export default function ScannerScreen({route, navigation}: props) {
  // const [information, setInformation] = useState<CleanItem>(
  //   {
  //     transportType: route.params.transportType,
  //     fleetID: undefined,
  //     trainID: undefined,
  //   }
  // )
  function processBarcode(barcode: string) {
    try {
      let type = barcode.substring(0,2);
      let id = barcode.substring(2,5);
      let subsection = barcode.substring(5,7);
      let info = route.params.transportType;
      if (type === 'TM') {
        info = TransportTypes.Tram;
        // setInformation({...information, transportType: TransportTypes.Tram});
      } else if (type === 'TN') {
        info = TransportTypes.Train;
        // setInformation({...information, transportType: TransportTypes.Train});
      } else if (type === 'BS') {
        info = TransportTypes.Bus;
        // setInformation({...information, transportType: TransportTypes.Bus});
      }
      navigation.navigate('Confirmation', 
        {fleetID: fleetAssocator(id), 
          trainID: id, 
          carriage: Number.parseInt(subsection), 
          startTime: Date.now(),
          transportType: info,
        });
      // console.log(type);
      // console.log(id);
      // console.log(subsection);

      // Number.parseInt(subsection)
      // setInformation({...information, fleetID: fleetAssocator(id)});
      // setInformation({...information, trainID: id});
      // setInformation({...information, carriage: Number.parseInt(subsection)});
      // console.log(information)
    }
    catch {
      alert('unable to scan barcode');
    }
  }
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    processBarcode(data);
    // alert(`Bar code with type ${type} and data ${data} has been scanned! Please update logs`);
  };


  
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if(scanned === true){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => alert('Logs have been updated')} style={styles.button_green}>
          <Text style={styles.buttonText}>Update Logs</Text>
        </TouchableOpacity>
        
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          //style={StyleSheet.absoluteFillObject}
          style={styles.square}
  
        />
        {scanned &&
        <TouchableOpacity onPress={() => setScanned(false)}  style ={[styles.button_scan, {backgroundColor: getTransportColors(route.params.transportType)}]}>
         <Text style={styles.buttonText}> {'Tap Button to Scan Again'}  </Text>
         </TouchableOpacity>
         }
      </View>
    );
  
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert('Please Scan Barcode PLS')} style={styles.button}>
        <Text style={styles.buttonText}>Please Scan Barcode</Text>
        
      </TouchableOpacity>
      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        //style={StyleSheet.absoluteFillObject}
        style={styles.square}

      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  square: {
  position: 'absolute',
  top: 275,
  left: 45,
  bottom: 290,
  right: 45
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    position: 'absolute',
    top: 550,
    right: 100,
    left: 100,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  button_scan: {
    position: 'absolute',
    bottom: 375,
    right: 100,
    left: 100,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  button_green: {
    position: 'absolute',
    top: 550,
    right: 100,
    left: 100,
    backgroundColor: "green",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    textAlign:'center',
  },
});

/**
 * {
        transportType: tram,
        fleetID: undefined,
        trainID: undefined,
        carriage: null,
        startTime: null,
        endTime: null
      }
 */