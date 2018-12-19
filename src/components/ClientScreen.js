import React from 'react';
import { StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';

import NavigationBar from './NavigationBar'

const detalheCliente = require('../image/detalhe_cliente.png');
const clienteUm = require('../image/cliente1.png');
const clienteDois = require('../image/cliente2.png');

export default class clientScreen extends React.Component {
    render() {
        return (
        <View style={styles.viewContainer}>
            <StatusBar
                //hidden
                backgroundColor="#B9C941"
                barStyle="light-content"
            />
            <NavigationBar
                voltar
                navigator={this.props.navigator}
            />

            <View style={styles.cabecalho}>
                <Image source={detalheCliente}/>
                <Text style={styles.txtTitle} >Nossos Clientes</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={clienteUm}/>
                <Text style={styles.txtDetalhes}>Lorem ipsum dolorem</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={clienteDois}/>
                <Text style={styles.txtDetalhes}>Lorem ipsum dolorem</Text>
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
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25,
    },

    detalheCliente: {
        padding: 20,
        marginTop: 10
    },

    txtDetalhes: {
        fontSize: 18,
        marginLeft: 20
    },

    viewContainer: {
        backgroundColor: 'white',
        flex: 1
    }
});
