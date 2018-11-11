import React, { Component } from 'react';
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ImageBackground, Image, Alert, View } from 'react-native';
const CONF = require('../conf/conf');
import  LinearGradient  from 'react-native-linear-gradient';
import TextInputCustom  from '../props/input-email';
import BtnPrimary from '../props/btn-primay';
import BtnSecondary from '../props/btn-secondary';


export default class HomeLoggedPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            from:'',
            to:'',
        }
    }

    changeFrom = (text) => {
        this.setState({
            from:text
        });
    }

    changeTo = (text) => {
        this.setState({
            to:text
        });
    }

    render() {
        return (
            <View>
                <LinearGradient
                start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                colors={['#6600EE','#3700B3']}
                style={styles.header}>
                    <View style={styles.HeadersContent}>
                        <Text style={styles.textLogo}>KeroKarona</Text>
                        <Text style={styles.textSubLogo}>Para onde você quer viajar?</Text>
                    </View>
                </LinearGradient>
                <View style={styles.inputGroup}>
                    <TextInputCustom style={styles.inputMargin} placehold="Saindo de..." fun={this.changeFrom}></TextInputCustom>
                    <TextInputCustom style={styles.inputMargin} placehold="Para..." fun={this.changeTo}></TextInputCustom>
                </View>
                <View style={styles.btnGroup}>
                    <BtnPrimary text='Criar'></BtnPrimary>
                    <BtnSecondary text='Procurar'></BtnSecondary>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        height:150,
    },
    textLogo:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 22,
    },
    textSubLogo:{
        fontSize: 14,
        color: '#fff',
        marginTop:40,
        fontWeight: 'normal',
    },
    container: {

    },
    HeadersContent: {
        alignItems:'center',
    },
    inputGroup: {
        marginTop: 20,
    },
    btnGroup:{
        display:'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent:'space-around',
    }
});