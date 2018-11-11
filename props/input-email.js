import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class TextInputCustom extends Component {

    render() {
        return (
            <View style={styles.inpuGroup}>
                <TextInput 
                    underlineColorAndroid={'transparent'}
                    style={styles.inputEmail}
                    placeholder={this.props.placehold} 
                    placeholderTextColor={'#6600ee'}
                    onChangeText={(text)=>{this.props.fun(text)}}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputEmail: {
        width: '90%',
        justifyContent: 'center',
        padding:7,
        height:40,
        color: '#6600ee',
        borderColor: '#6600ee',
        borderRadius: 20,
        borderWidth: 2,
        
    },
    inpuGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginBottom:20,
    },
});

export default TextInputCustom;