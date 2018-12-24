import React from 'react';
import { StyleSheet,
    Text,
    View,
    StatusBar,
    Image
} from 'react-native';

import NavigationBar from './NavigationBar'

const detalheServicos = require('../image/detalhe_servico.png');

export default class ServicesScreen extends React.Component {
    render() {
        return (
        <View style={styles.viewContainer}>
            <StatusBar
                //hidden
                backgroundColor="#19D1C8"
                barStyle="light-content"
            />
            <NavigationBar
                voltar
                navigator={this.props.navigator}
                corDeFundo="#19D1C8"
            />

            <View style={styles.cabecalho}>
                <Image source={detalheServicos}/>
                <Text style={styles.txtTitle} >Serviços</Text>
            </View>

            <View style={styles.detalheServicos}>
                <Text style={styles.txtDetalhes}>Meus serviços</Text>
                <Text style={styles.txtDetalhes}>Alugueis de escritorios</Text>
                <Text style={styles.txtDetalhes}>Venda de prédios comérciais</Text>
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
        color: "#19D1C8",
        marginLeft: 10,
        marginTop: 25,
    },

    detalheServicos: {
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
