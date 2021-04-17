/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import HomeScreen from '../screens/HomeScreen';
import LogScreen from '../screens/LogScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import ScannerScreen from '../screens/ScannerScreen';
import SelectionScreen from '../screens/SelectionScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
// /SelectionScreen
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Scanner" component={ScannerScreen} options={{ title: 'Scanner' }} />
      <Stack.Screen name="CleaningLog" component={LogScreen} options={{ title: 'Logs' }} />
      <Stack.Screen name="Selection" component={SelectionScreen} options={{ title: 'Select' }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
