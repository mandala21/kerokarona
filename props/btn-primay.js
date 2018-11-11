import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class BtnPrimary extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.fun} style={styles.btnGradiente} >
                <Text style={styles.btnText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

    
}
const styles = StyleSheet.create({
    btnText: {
        color: '#fff',
        fontFamily: 'Roboto',
        textAlign: 'center',

    },
    btnGradiente: {
        width:153,
        height:46,
        borderRadius: 20,
        backgroundColor: '#6600EE',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default BtnPrimary;
