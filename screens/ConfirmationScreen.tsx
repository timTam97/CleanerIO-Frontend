import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { getTransportColors, RootStackParamList, TransportTypes } from '../types';
type props = StackScreenProps<RootStackParamList, 'Confirmation'>


export default function ConfirmationScreen({ navigation, route }: props) {
  let busImage = require('../assets/images/PTVBus.png');
  let trainImage = require('../assets/images/PTVTrain.png');
  let tramImage = require('../assets/images/PTVTram.png');
  let selectedImage = tramImage;
  switch (route.params.transportType) {
    case TransportTypes.Bus:
      selectedImage = busImage;
      break;
    case TransportTypes.Train:
      selectedImage = trainImage;
      break;
  }
  return (
    <View style={styles.container}>
      <View style={[styles.preview, {backgroundColor: getTransportColors(route.params.transportType)}]}>
        <View style={styles.previewIcon}>
          <Image style={styles.previewIconImage} source={selectedImage} />
        </View>
        <Text style={[styles.previewText]}>
          Fleet: {route.params.fleetID}{"\n"}
          Train: #{route.params.trainID}{"\n"}
          Carriage: #{route.params.carriage}
        </Text>
      </View>
      <View style={styles.details}>
        <View><View></View><View></View></View>
        <View></View>
      </View>
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    width: '80%',
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  preview: {
    width: '80%',
    borderRadius: 15,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewText: {
    color: 'white',
    marginRight: 10,
    fontSize: 16,
    fontWeight: '700'
  },
  previewIcon: {
    marginLeft: 15,
    borderRadius: 50,
    width: 70,
    height: 70,
    backgroundColor: 'white',
  },
  previewIconImage: {
    width:40,
    height:40,
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -20}, {translateY: -20}]
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
