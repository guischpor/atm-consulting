import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import MainServicesScreen from './src/components/MainServicesScreen'
import ClientScreen from './src/components/ClientScreen';
import ContatcScreen from './src/components/ContatcScreen';
import CompanyScreen from './src/components/CompanyScreen';
import ServicesScreen from './src/components/ServicesScreen';

export default class App extends React.Component {
  render() {
    return (
        <Navigator
          initialRoute= {{ id: 'principal' }}
          renderScene={(route, navigator) => {

            switch (route.id) {
              case 'principal':
                return (
                  <MainServicesScreen navigator={navigator}/>
                );

              case 'cliente':
                return (
                  <ClientScreen navigator={navigator}/>
                );

              case 'contato':
                return (
                  <ContatcScreen navigator={navigator}/>
                );

              case 'empresa':
                return (
                  <CompanyScreen navigator={navigator}/>
                );

              case 'servicos':
                return (
                  <ServicesScreen navigator={navigator}/>
                );
            }
          }}
        />
    );
  }
}