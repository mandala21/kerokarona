import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

class RowKarona extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.infoKarona}>
                    <View style={styles.lineTrajectory}>
                        <Text style={styles.textTrajectory}>{this.props.to}</Text>
                        <Image source={require('../assets/car_2.png')} style={styles.imageStyle} />
                        <Text style={styles.textTrajectory}>{this.props.from}</Text>
                    </View>
                    <Text style={styles.textDate}>{this.props.date}</Text>
                </View>
                <View style={styles.iconDelete}>
                    <TouchableOpacity>
                            <Icon name="delete" 
                        color='#B00303'/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
    textTrajectory:{
        fontSize: 14,
        color: '#000',
    },
    textDate: {
        fontSize: 12,
        color: '#262626',
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    lineTrajectory: {
        display: 'flex',
        flexDirection:'row',
    }
});

export default RowKarona;