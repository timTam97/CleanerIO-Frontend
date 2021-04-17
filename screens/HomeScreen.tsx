import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useFonts, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList, TransportTypes } from '../types';
type props = StackScreenProps<RootStackParamList, 'Root'>
export default function HomeScreen({route, navigation}: props) {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold,
  });
  let fonts = {fontFamily: 'Arial Helvetica Verdana'}
  if (fontsLoaded) {
    fonts.fontFamily = 'OpenSans_800ExtraBold Arial Helvetica Verdana';
  }
  let navigating = (tram: TransportTypes) => 
    {navigation.navigate('Selection', 
      {
        transportType: tram,
        fleetID: undefined,
        trainID: undefined,
        carriage: null,
        startTime: null,
        endTime: null
      })};
  return (
    <View style={{...styles.container, ...fonts}}>
      <View style={{ position: 'absolute', width: '100%', top: 0, left: 0, height: '30%', backgroundColor: '#D72D2E', zIndex: 0}}/>
      <Image style={styles.background} source={require('../assets/images/WaveBorder.png')} ></Image>
      <Text style={styles.title}>TRANSPORT TYPE</Text>
      <View style={{flexDirection: 'row', padding: 10, backgroundColor: 'rgba(0,0,0,0)'}}>
          <TouchableOpacity onPress={()=>{navigating(TransportTypes.Train)}} style={styles.button}>
            <Image style={{width:'75%', resizeMode: 'contain', position:'absolute', left: '32%', transform: [{translateY:-45}]}} 
                source={require('../assets/images/PTVTrain.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigating(TransportTypes.Bus)}} style={styles.button}>
              <Image style={{width:'75%', resizeMode: 'contain', position:'absolute', left: '32%', transform: [{translateY:-45}]}} 
                source={require('../assets/images/PTVBus.png')}></Image>
          </TouchableOpacity>
          {/* <Text style={styles.title}>TRANSPORT TYPE</Text> */}
      </View> 
      <TouchableOpacity onPress={()=>{navigating(TransportTypes.Tram)}} style={styles.button}>
          <Image style={{width:'75%', resizeMode: 'contain', position:'absolute', left: '32%', transform: [{translateY:-60}]}} 
              source={require('../assets/images/PTVTram.png')}></Image>
      </TouchableOpacity>
      {/* <Text style={styles.title}>Cool</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial Helvetica Verdana',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  background: {
    position: 'absolute',
    top: '30%',
    left: 0,
    width: '100%',
    transform: [{translateY:-162}],
    zIndex: 0,
  },
  button: {
    backgroundColor: "#FFF",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    width: 150,
    height: 150,
    // '0px 4px 5px rgba(0, 0, 0, 0.25)'
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 5,  
    // zIndex: 100
  },
  buttonText: {
    fontSize: 20,
    // color: '#000',
    textAlign:'center',
  },
});
// 324