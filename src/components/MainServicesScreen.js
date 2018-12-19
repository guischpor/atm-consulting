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
                backgroundColor='#CCC'
                barStyle="light-content"
            />
            <NavigationBar/>

            <View style={styles.logo}>
                <Image source={logo}/>
            </View>

            <View style={styles.menu}>

                <View style={styles.menuGrupo}>

                    <TouchableHighlight
                        onPress={() => {
                            this.props.navigator.push({ id: 'b' });
                        }}
                    >
                        <Image style={styles.imgMenu} source={menuCliente}/>
                    </TouchableHighlight>

                    <Image style={styles.imgMenu} source={menuContato}/>
                </View>

                <View style={styles.menuGrupo}>
                    <Image style={styles.imgMenu} source={menuEmpresa}/>
                    <Image style={styles.imgMenu} source={menuServico}/>
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
