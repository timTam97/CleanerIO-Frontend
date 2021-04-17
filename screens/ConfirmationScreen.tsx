import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RootStackParamList } from '../types';
type props = StackScreenProps<RootStackParamList, 'Confirmation'>

export default function ConfirmationScreen({ navigation, route }: props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Preview}>
        <view><Image source={require('../assets/images/PTVBus.png')}></Image></view>
      </TouchableOpacity>
      <View>

      </View>
      <TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Preview: {
    width: '80%',
    borderRadius: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
