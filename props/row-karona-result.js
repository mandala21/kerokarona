import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import  LinearGradient  from 'react-native-linear-gradient';

class RowKaronaResult extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.card}>
                    <View style={styles.infoKarona}>
                        <View style={styles.lineTrajectory}>
                            <Text style={styles.textTrajectory}>{this.props.to}</Text>
                            <Image source={require('../assets/car_2.png')} style={styles.imageStyle} />
                            <Text style={styles.textTrajectory}>{this.props.from}</Text>
                        </View>
                        <Text style={styles.textDate}>{this.props.date} às {this.props.hour}</Text>
                    </View>
                    <LinearGradient
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    colors={['#6600EE','#3700B3']}
                    style={styles.price}>
                        <Text style={styles.priceText}>{this.props.price}</Text>
                    </LinearGradient>
                    <View style={styles.iconForward}>
                        <View style={styles.iconContainer}>
                                <Icon name="arrow-forward" 
                            color='#fff'/>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        height: 85,
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
        flex:2
    },
    iconForward:{
        display:'flex',
        flexDirection:'column',
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
    },
    iconContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#03DAC3',
        borderTopRightRadius:6,
        borderBottomRightRadius:6,
    },
    price:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    priceText: {
        fontSize:14,
        color:'#fff',
        fontFamily:'Roboto',
        marginLeft:5,
        marginRight:5,
    },
});

export default RowKaronaResult;