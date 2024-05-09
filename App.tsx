import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';

import Login from './src/pages/Login';

import { Colors } from '@constants/Colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      animated={true}
      backgroundColor='#f50d41'
      barStyle='light-content'
      />
      <Login></Login>
    </SafeAreaView>
  );
}
