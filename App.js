import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import MainServicesScreen from './src/components/MainServicesScreen'
import ClientScreen from './src/components/ClientScreen';

export default class App extends React.Component {
  render() {
    return (
        <Navigator
          initialRoute= {{ id: 'a' }}
          renderScene={(route, navigator) => {
            if (route.id === 'a') {
              return (
                <MainServicesScreen navigator={navigator}/>
              );
            }

            if (route.id === 'b') {
              return (
                <ClientScreen  navigator={navigator}/>
              );
            }
          }}
        />
    );
  }
}