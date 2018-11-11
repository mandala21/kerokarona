import React, { Component } from 'react';
import TextInputCustom from '../props/input-email'
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ImageBackground, Image, Alert, View } from 'react-native';
const CONF = require('../conf/conf');
import { AsyncStorage } from "react-native";

export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.state = {
            email:'',
            password:'',
            token:''
        }
    }

    changeEmail(text){
        this.setState({
            email:text
        });
    }

    changePassword(text){
        this.setState({
            password:text
        });
    }

    login = () => {
        let url = CONF.BASE_URL + 'api/login';
        
        console.log(url);
        //set a url e a configuracao do header e body da reuqest
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
        })
        .then((rs)=>{
            //separa a data do retorno e o status
            data = rs.json();
            statusCode = rs.status;
            return Promise.all([data,statusCode]);
        })
        .then(([response,status])=>{
            console.log('====================================');
            console.log(response);
            console.log('====================================');
            //se for 200 usuario correto, se for 401 nao autorizado
            if (status == 200){
                this.state.token = response.token;
                this._storeData();
            } else if(status == 401) {
                Alert.alert(
                    'Error',
                    'Usuário ou senha invalido(s)'
                );
            } else {
                Alert.alert(
                    'Error',
                    'Houve algo inesperado, por favor entre em contato com o suporte :)'
                );
            }
        })
        .catch((error)=>{
            Alert.alert(
                'Error',
                'Houve algum error no sistema, por favor entre em contato com o suporte :)'
            );
        });
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('token','Bearer ' + this.state.token);
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            Alert.alert('Error','Houve um erro ao salvar o seu Token, tente realizar o login de novo. Caso persista o erro, entre em contato com o suporte :)');
        }
    }

    render() {
        return (
            <ImageBackground source={require('../assets/fundo_2.jpg')} style={styles.fundo}>
                <View>
                    <Image source={require('../assets/car_2.png')} style={styles.imgLogo} />
                    <Text style={styles.textLogo}>KeroKarona</Text>
                </View>
                <View>
                    <TextInputCustom placehold="Email" fun={this.changeEmail}></TextInputCustom>
                    <PasswordInput fun={this.changePassword}></PasswordInput>
                </View>
                <BtnWhite fun={this.login} text="Entrar"></BtnWhite>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imgLogo: {
        width: 100,
        height: 100,
    },
    textLogo: {
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#6600ee',
    },
    fundo: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems:'center',
    },
});