import React from 'react';
import { StyleSheet,
    Text,
    View
} from 'react-native';

export default class NavigationBar extends React.Component {
    render() {
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
    },

    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    }
});
