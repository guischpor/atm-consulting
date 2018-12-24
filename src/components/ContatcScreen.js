import React from 'react';
import { StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';

import NavigationBar from './NavigationBar'

const detalheContato = require('../image/detalhe_contato.png');

export default class ContactScreen extends React.Component {
    render() {
        return (
        <View style={styles.viewContainer}>
            <StatusBar
                //hidden
                backgroundColor="#61BD8C"
                barStyle="light-content"
            />
            <NavigationBar
                voltar
                navigator={this.props.navigator}
                corDeFundo="#61BD8C"
            />

            <View style={styles.cabecalho}>
                <Image source={detalheContato}/>
                <Text style={styles.txtTitle} >Contatos</Text>
            </View>

            <View style={styles.detalheContato}>
                <Text style={styles.txtDetalhes}>CEL: (41) 99852-1111</Text>
                <Text style={styles.txtDetalhes}>TEL: (41) 3030-1214</Text>
                <Text style={styles.txtDetalhes}>EMAIL: atm@consultoria.com</Text>
            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },

    txtTitle: {
        fontSize: 30,
        color: "#61BD8C",
        marginLeft: 10,
        marginTop: 25,
    },

    detalheContato: {
        padding: 20,
        marginTop: 20
    },

    txtDetalhes:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },

    viewContainer: {
        backgroundColor: 'white',
        flex: 1
    }
});
