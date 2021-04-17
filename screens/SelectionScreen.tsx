import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getTransportColors, RootStackParamList } from '../types';
type props = StackScreenProps<RootStackParamList, 'Selection'>

export default function SelectionScreen({route, navigation}: props) {
  let defaultInformation = {
    transportType: route.params.transportType,
    fleetID: undefined,
    trainID: undefined,
    carriage: null,
    startTime: null,
    endTime: null
  }
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', width: '100%', top: 0, left: 0, height: '30%', backgroundColor: '#D72D2E', zIndex: 0}}/>
      <Image style={styles.background} source={require('../assets/images/WaveBorder.png')} ></Image>
      <TouchableOpacity onPress={()=>{navigation.navigate('Scanner', defaultInformation)}} style={[styles.button, {backgroundColor: getTransportColors(route.params.transportType)}]}>
          
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('CleaningLog', defaultInformation)}} style={[styles.button, {backgroundColor: '#707372'}]}>
          
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#FFF",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    width: 200,
    height: 200,
    // '0px 4px 5px rgba(0, 0, 0, 0.25)'
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,  
    // zIndex: 100
  },
  background: {
    position: 'absolute',
    top: '30%',
    left: 0,
    width: '100%',
    transform: [{translateY:-162}],
    zIndex: 0,
  },
});
