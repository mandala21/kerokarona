import React, { Component } from 'react';
import TextInputCustom from '../props/input-email'
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ImageBackground, Image, Alert, View } from 'react-native';
const CONF = require('../conf/conf')

export default class RegisterPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email:'',
            name:'',
            password:'',
        };
    }

    changeEmail = (text) =>{
        this.setState({
            email:text
        });
    }

    changeName = (text) => {
        this.setState({
            name:text
        });
    }

    changePassword = (text) => {
        this.setState({
            password:text
        });
    }

    makeRegiste = () => {
        let url = CONF.BASE_URL + 'api/register';
        
        console.log('====================================');
        console.log(['Minha requisicao',this.state]);
        console.log('====================================');

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
                name:this.state.name,
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
            console.log([response,'status ' + status]);
            console.log('====================================');
            //se for 200 usuario correto, se for 401 nao autorizado
            if (status== 200){
                this.setState({
                    token:response.token,
                });
            } else if (status==422){
                //cria a mensagem de erro
                msg = '';
                //transforma o objeto em array
                errors = Object.entries(response.errors);
                //interage em todos
                errors.forEach(error => {
                    //categoria do error
                    msg += error[0] + ': \n';
                    //todos os erros daquela categoria
                    error[1].forEach(descriptionError => {
                        msg += descriptionError + '\n';
                    });
                });
                //mostra a mensagem de error
                Alert.alert('Error',msg);
            }
        })
        .catch((error)=>{
            Alert.alert(
                'Error',
                'Houve algum error no sistema, por favor entre em contato com o suporte :)'
            );
        });
    }

    render(){
        return (
            <ImageBackground source={require('../assets/fundo_2.jpg')} style={styles.fundo}>
                <View>
                    <Image source={require('../assets/car_2.png')} style={styles.imgLogo} />
                    <Text style={styles.textLogo}>KeroKarona</Text>
                </View>
                <View>
                    <TextInputCustom fun={this.changeName} placehold='Nome'></TextInputCustom>
                    <TextInputCustom fun={this.changeEmail} placehold='Email'></TextInputCustom>
                    <PasswordInput fun={this.changePassword}></PasswordInput>
                </View>

                <BtnWhite fun={this.makeRegiste} text="Entrar"></BtnWhite>

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
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

