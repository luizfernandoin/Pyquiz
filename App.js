import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="blue" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
//Ola tudo bom
