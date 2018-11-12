import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'

class RowKarona extends Component {
    render() {
        return (
            <View style={sytles.card}>
                <View style={sytles.infoKarona}>
                    <Text>Ola Mundo</Text>
                    <Text>Ola Mundo</Text>
                </View>
                <View style={sytles.iconDelete}>
                    <TouchableOpacity>
                            <Icon name="delete" 
                        color='#B00303'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const sytles = StyleSheet.create({
    card:{
        width:'90%',
        height: 56,
        borderRadius: 6,
        elevation: 1,
        borderLeftWidth: 5,
        borderLeftColor: '#6600ee',
        display:'flex',
        flexDirection:'row',
        marginBottom:12,
    },
    infoKarona:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10,
        flex:1
    },
    iconDelete:{
        display:'flex',
        flexDirection:'column',
        marginRight:10,
        flex:0,
        justifyContent:'center',
    }
});

export default RowKarona;