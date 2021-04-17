import { useFonts, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CleanItem, getTransportColors, RootStackParamList, TransportTypes } from '../types';
type props = StackScreenProps<RootStackParamList, 'Confirmation'>
let randomNames = [
  {fst: 'Patrick', snd:'Jones'},
  {fst: 'Timothy', snd:'Samjeep'},
  {fst: 'Marcus', snd:'Limosine'},
  {fst: 'Mary', snd:'Johnson'},
  {fst: 'Eddie', snd:'Smith'},
  {fst: 'Asfar', snd:'Soman'}
]


async function submittToServer(item: CleanItem) {
  console.log(item);
  return await fetch('https://m3gztf94o0.execute-api.ap-southeast-2.amazonaws.com/add',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "fleetID": item.fleetID,
      "trainID": item.trainID,
      "carriage": item.carriage,
      "startTime": item.startTime,
      "endTime": item.endTime,
      "transportType": item.transportType,
      "usedSupplies": [2,3,4]
    }),
  }).then(console.log).catch(() => {alert("Unable to submitt to the server"); return Promise.reject})
}

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
  let timeTaken = Math.random()*1200000+600000;
  let timeTaken1= new Date(timeTaken) 
  let endTime = new Date(Date.now())
  if (route.params.endTime !== undefined) {
    endTime = new Date(route.params.endTime);
  }
  let startTime = new Date(endTime.getTime() - timeTaken);
  let name = randomNames[Math.floor((Math.random()*5))]
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
        <View style={styles.detailUp}><View style={styles.Dcells}><Text style={styles.header}>Clean Date</Text><Text>{startTime.getDay()}/{startTime.getMonth()}/{startTime.getFullYear()}</Text></View>
        <View style={styles.Dcells}><Text style={styles.header}>Next Scheduled{"\n"}Clean</Text><Text>16/4/2021</Text></View></View>
        <View style={{...styles.detailUp}}><View style={styles.Dcells}>
          <Text style={[styles.ralign, styles.header]}>Clean Time</Text><Text style={styles.ralign}>{timeTaken1.getUTCHours()}:{timeTaken1.getUTCMinutes()}</Text></View>
        <View style={styles.Dcells}><Text style={[styles.ralign, styles.header]}>Completed{"\n"}by</Text><Text style={styles.ralign}>{name.fst}{"\n"}{name.snd}</Text></View></View>
      </View>
      <TouchableOpacity style={[styles.tickButton, {backgroundColor: getTransportColors(route.params.transportType)}]} 
        onPress={async () => { submittToServer(
          {...route.params, 
            endTime: endTime.getTime(), 
            startTime: startTime.getTime(),
          }).then(()=>{navigation.popToTop(); alert("Saved")}) }}>
        <Image style={{width: 30, height: 30, position: 'absolute', top: '50%', left: '50%', transform: [{translateX: -15}, {translateY: -15}]}}source={require('../assets/images/TickSquare.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tickButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    elevation: 2,
    marginTop: 50
  },
  header: {
    color: '#33343480',
  },
  Dcells: {
    height: 80
  },
  ralign: {
    textAlign: 'right'
  },
  detailUp: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    textAlign: 'right',
  },
  details: {
    width: '80%',
    borderRadius: 15,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    elevation: 2,
    marginTop: 20
  },
  preview: {
    width: '80%',
    borderRadius: 15,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,
    elevation: 2
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
