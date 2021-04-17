import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


const DATA = [
  {
    //title: 'CLEANING LOG: \n 16/04/2021',
    data: [
      '            Fleet HCMT                Cleaned\n            Train #88                    21:33:35 \n            Carriage #5',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #6                22:00:00',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #7                22:30:00',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #7                22:30:00',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #7                22:30:00',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #7                22:30:00',
      '            Fleet HCMT                Scheduled\n            Train #88                    Clean \n            Carriage #7                22:30:00',
    ],
  },
];

const Item = ({ title }) => (
  <TouchableOpacity>
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.test} source={require('../assets/images/PTVTrain.png')} ></Image>
  </View>
  </TouchableOpacity>
);



export default function App() {
  return (


  <SafeAreaView style={styles.container}>
  <View style={{ position: 'absolute', width: '100%', top: 0, left: 0, height: '30%', backgroundColor: '#D72D2E', zIndex: 0}}/>
    <Image style={styles.background} source={require('../assets/images/WaveBorder.png')} ></Image>
    <Text style={styles.title2}>         CLEANING LOG:</Text>
    <Text style={styles.title2}>16/04/2021</Text>


<SectionList
  sections={DATA}
  keyExtractor={(item, index) => item + index}
  //renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}

  renderItem={({ item }) => <Item title={item} />}
/>
</SafeAreaView>


  );
}


const styles = StyleSheet.create({
  test:{
    position: 'absolute',
    top: 30,
    left: 10,
    width: 40,
    height: 40
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  container_safe: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f8f8ff',
    padding: 30,
    marginVertical: 10,
    borderRadius:10,    
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,  

  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'left',
  },
  title2: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
    marginTop: 15,
    marginRight: 170,
    textAlign: 'left',

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