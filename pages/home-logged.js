import React, { Component } from 'react';
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ScrollView, Image, Alert, View } from 'react-native';
import  LinearGradient  from 'react-native-linear-gradient';
import TextInputCustom  from '../props/input-email';
import BtnPrimary from '../props/btn-primay';
import BtnSecondary from '../props/btn-secondary';
import RowKarona from '../props/row-karonas';
import AutoCompleteText from '../props/auto-complete';

const CONF = require('../conf/conf');
const CITIES =  require('../conf/cities');


const karonas = [
    {
        id: 1,
        to: 'Teresina ',
        from:'Parnaiba',
        date: '10/01/1000',
    },
    {
        id: 2,
        to: 'Teresina ',
        from:'Piracuruca',
        date: '11/01/1000',
    },
    {
        id:3,
        to: 'Piracuruca ',
        from:'Parnaiba',
        date:'15/01/1000',
    },
    {
        id:4,
        to: 'Teresina ',
        from:'Piripiri',
        date:'15/01/1000',
    }
];

export default class HomeLoggedPage extends React.Component {

    constructor(props){
        super(props);
        //init the states
        this.state = {
            from:'',
            to:'',
            citys:[],
        }
        //get citys from web service
        // this.getCitys();
    }

    // getCitys = async () => {
    //     const {navigation} = this.props;
    //     const token = navigation.getParam('token');
        
    //     //get from server
    //     try {
    //         const response = await fetch(CONF.BASE_URL + 'city', {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': token,
    //             },
    //         });
    //         //get json of response
    //         const responseJson = await response.json();
    //         console.log(responseJson);
    //         //populate the temp var and set state
    //         let aux = [];
    //         responseJson.forEach(el => {
    //             aux.push(el);
    //         });
    //         console.log(aux);
    //         this.setState({
    //             citys:aux,
    //         })
    //         console.log('====================================');
    //         console.log(this.state);
    //         console.log('====================================');
    //     } catch {
    //         console.log('====================================');
    //         console.log('deu erro');
    //         console.log('====================================');
    //     }
        
    // }

    changeFrom = (text) => {
        this.setState({
            from:text
        });
        console.log(text);
        
    }

    changeTo = (text) => {
        this.setState({
            to:text
        });
    }

    _search = async () => {
        const url = CONF.BASE_URL + `ride/filter?from=${this.state.from}&to=${this.state.to}`;
        const {navigation} = this.props;
        const token = navigation.getParam('token');
        try {
            const response = await fetch(url,{
                method:'GET',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token,
                },
            });
            console.log(1);
            const responseJson = await response.json();
            console.log(responseJson);
            console.log(2);
        } catch {
            console.log('erro no servidor');
        }
        
        
    }

    render() {
        return (
            <ScrollView>
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
                    <AutoCompleteText placehold='Saindo de...' _data={CITIES} fun={this.changeFrom}></AutoCompleteText>
                    <AutoCompleteText placehold='Para...' _data={CITIES} fun={this.changeTo}></AutoCompleteText>
                </View>
                <View style={styles.btnGroup}>
                    <BtnPrimary text='Criar'></BtnPrimary>
                    <BtnSecondary text='Procurar' fun={this._search}></BtnSecondary>
                </View>
                <Text style={styles.subTitle}>Minhas Karonas</Text>
                <View style={styles.listKaronas}>
                    {
                        karonas.map((u)=>{
                            return (
                                <RowKarona key={u.id} date={u.date} 
                                to={u.to} from={u.from}></RowKarona>
                            );
                        })
                    }
                </View>
            </ScrollView>
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
    },
    subTitle: {
        fontSize: 14,
        fontWeight:'bold',
        color: '#000',
        marginTop:20,
        marginBottom:20,
        marginLeft:'5%',
    },
    listKaronas:{
        alignItems:'center',
    }
});
