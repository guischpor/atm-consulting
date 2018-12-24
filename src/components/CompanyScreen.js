import React from 'react';
import { StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';

import NavigationBar from './NavigationBar'

const detalheEmpresa = require('../image/detalhe_empresa.png');

export default class CoompanyScreen extends React.Component {
    render() {
        return (
        <View style={styles.viewContainer}>
            <StatusBar
                //hidden
                backgroundColor='#EC7148'
                barStyle="light-content"
            />
            <NavigationBar
                voltar
                navigator={this.props.navigator}
                corDeFundo="#EC7148"
            />

            <View style={styles.cabecalho}>
                <Image source={detalheEmpresa}/>
                <Text style={styles.txtTitle} >Empresa</Text>
            </View>

            <View style={styles.detalheCompany}>
                <Text style={styles.txtDetalhes}>Minha empresa é no ramo de consultoria</Text>
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
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25,
    },

    detalheCompany: {
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
