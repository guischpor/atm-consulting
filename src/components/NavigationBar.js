import React from 'react';
import { StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const btnBack = require('../image/btn_voltar.png');

export default class NavigationBar extends React.Component {
    render() {

        if (this.props.voltar) {
            return (
                <View style={styles.barraTitulo}>
                    <TouchableHighlight
                        onPress= {() => {
                            this.props.navigator.pop()
                        }}
                    >
                        <Image source={btnBack}/>
                    </TouchableHighlight>
                    <Text style={styles.title}>ATM Consultoria</Text>
                </View>
            );
        }

        return (
            <View style={styles.barraTitulo}>
                <Text style={styles.title}>ATM Consultoria</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    barraTitulo:{
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row',
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        flex: 1
    }
});
