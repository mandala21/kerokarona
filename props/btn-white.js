import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class BtnWhite extends Component {

    render() {
        return (
            <TouchableOpacity onPress={this.props.fun} style={styles.btnLogin} >
                <Text style={styles.btnLoginTxt}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnLogin: {
        alignSelf: 'center',
        width: '60%',
        height: '8%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    btnLoginTxt: {
        color: '#6600EE',
        fontFamily: 'Roboto',
    }
});

export default BtnWhite;
