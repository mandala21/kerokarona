import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class PasswordInput extends Component {

    render() {
        return (
            <View style={styles.inpuGroup}>
                <TextInput 
                    underlineColorAndroid={'transparent'}
                    style={styles.inputPassword}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    onChangeText={(text)=>{this.props.fun(text)}} 
                    placeholderTextColor={'#6600ee'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputPassword: {
        width: '90%',
        justifyContent: 'center',
        padding:7,
        height:40,
        color: '#6600ee',
        borderColor: '#6600ee',
        borderRadius: 20,
        borderWidth: 2,
        
    },
    btnRegistrarTxt: {
        marginTop: '3%',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
    },
    inpuGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom:40,
    },
});

export default PasswordInput;