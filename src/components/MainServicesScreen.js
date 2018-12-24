import React from 'react';
import { StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

import NavigationBar from './NavigationBar'

const logo = require('../image/logo.png');
const menuCliente = require('../image/menu_cliente.png');
const menuContato = require('../image/menu_contato.png');
const menuEmpresa = require('../image/menu_empresa.png');
const menuServico = require('../image/menu_servico.png');

export default class MainServicesScreen extends React.Component {
    render() {
        return (
        <View>
            <StatusBar
                //hidden
                backgroundColor= '#00B0FF'
                barStyle="light-content"
            />
            <NavigationBar/>

            <View style={styles.logo}>
                <Image source={logo}/>
            </View>

            <View style={styles.menu}>

                <View style={styles.menuGrupo}>

                    <TouchableHighlight
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.push({ id: 'cliente' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuCliente}/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.push({ id: 'contato' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuContato}/>
                    </TouchableHighlight>

                </View>

                <View style={styles.menuGrupo}>
                    <TouchableHighlight
                        underlayColor={'#EC7148'}
                        activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.push({ id: 'empresa' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuEmpresa}/>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={'#19D1C8'}
                        activeOpacity={0.3}
                        onPress={() => {
                            this.props.navigator.push({ id: 'servicos' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuServico}/>
                    </TouchableHighlight>
                </View>

            </View>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar:{
        backgroundColor: '#CCC',
        padding: 10,
        height: 24,
    },

    logo:{
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 5,
    },

    menu:{
        alignItems: 'center',
    },

    menuGrupo:{
        flexDirection: 'row'
    },

    imgMenu:{
        margin: 15,
    },
});
