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
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', width: '100%', top: 0, left: 0, height: '30%', backgroundColor: '#D72D2E', zIndex: 0}}/>
      <Image style={styles.background} source={require('../assets/images/WaveBorder.png')} ></Image>
      <TouchableOpacity onPress={()=>{navigation.navigate('Selection')}} style={[styles.button, {backgroundColor: '#3070C7'}]}> 
      <Image
        style={styles.folder}
        source={require('../assets/images/FolderIcon.png')} >
      </Image>
      <Text style={styles.buttonText1}>ENTER A NEW LOG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('CleaningLog')}} style={[styles.button, {backgroundColor: '#707372'}]}>
      <Image
        style={styles.edit_square}
        source={require('../assets/images/EditSquare.png')} >
      </Image>
      <Text style={styles.buttonText2}>VIEW EXISTING LOGS</Text>
      </TouchableOpacity>


        


    </View>
  );
}

const styles = StyleSheet.create({
  buttonText1:{
    position: 'absolute',
    top: 130,
    left: 10,
    fontSize: 30,
    color: '#fff',
    textAlign:'left',
    fontWeight: 'bold'
  },
  buttonText2:{
    position: 'absolute',
    top: 100,
    left: 10,
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  edit_square:{
    position: 'absolute',
    top:5,
    left:140,
    width: 50,
    height: 50
  },
  folder:{
    position: 'absolute',
    top:5,
    left:140,
    width: 50,
    height: 50
  },
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
    elevation: 2
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
