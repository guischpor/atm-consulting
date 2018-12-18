import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MainServicesScreen from './src/components/MainServicesScreen'
//import ClientScreen from './src/components/ClientScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <MainServicesScreen/>
       {/* <ClientScreen/> */}
      </View>
    );
  }
}

