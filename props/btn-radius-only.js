import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export class BtnOnlyRadius extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btnRegistrar} onPress={this.props.fun}>
                <Text style={styles.btnRegistrarTxt}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnRegistrar: {
        alignSelf: 'center',
        borderColor: '#FFFFFF',
        borderRadius: 20,
        borderWidth: 2,
        width: '60%',
        height: '8%',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnRegistrarTxt: {
        marginTop: '3%',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
    },
});

export default BtnOnlyRadius;