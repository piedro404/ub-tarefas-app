import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';

import Login from './src/pages/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      animated={true}
      backgroundColor='#7e1f1f'
      barStyle='light-content'
      />
      <Login></Login>
    </SafeAreaView>
  );
}
