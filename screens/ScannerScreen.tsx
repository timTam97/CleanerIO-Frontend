import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned! Please update logs`);
    
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
        <TouchableOpacity onPress={() => setScanned(false)}  style ={styles.button_scan}>
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
  top: 120,
  left: 35,
  bottom: 220,
  right: 35
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
    top: 500,
    right: 100,
    left: 100,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  button_scan: {
    position: 'absolute',
    bottom: 550,
    right: 100,
    left: 100,
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  button_green: {
    position: 'absolute',
    top: 500,
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