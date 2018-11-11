import React, { Component } from 'react';
import { Alert, StyleSheet, Text,ImageBackground, Image, Button } from 'react-native';
import BtnWhite from '../props/btn-white';
import BtnOnlyRadius from '../props/btn-radius-only';


export class HomePage extends React.Component {

    callLogin = () => {
        this.props.navigation.navigate('LoginPage');
    }

    callRegister = () => {
        this.props.navigation.navigate('RegisterPage');
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fundo.jpg')} style={styles.fundo}>
                <Image source={require('../assets/car.png')} style={styles.imgLogo} />
                <Text style={styles.textLogo}>KeroKarona</Text>
                <BtnOnlyRadius fun={this.callRegister} text="Registrar"></BtnOnlyRadius>
                <BtnWhite fun={this.callLogin} text="Login"></BtnWhite>
            </ImageBackground >
        )
    }
};

const styles = StyleSheet.create({
    imgLogo: {
        marginTop: '15%',
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    textLogo: {
        fontFamily: 'Roboto',
        marginTop: '5%',
        fontSize: 24,
        alignSelf: 'center',
        color: '#ffffff',
        marginBottom: '55%',
    },
    fundo: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
    },
});

export default HomePage;