import React, { Component } from 'react';
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ScrollView, Image, Alert, View } from 'react-native';
const CONF = require('../conf/conf');
import  LinearGradient  from 'react-native-linear-gradient';
import TextInputCustom  from '../props/input-email';
import BtnPrimary from '../props/btn-primay';
import BtnSecondary from '../props/btn-secondary';
import RowKarona from '../props/row-karonas'
import AutoCompleteText from '../props/auto-complete'


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

const citys = [
    {
       city:'Teresina - PI',
    },
    {
        city:'Parnaiba - PI',
    },
    {
        city:'Piracuruca - PI',
    }, 
];

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
        console.log(text);
        
    }

    changeTo = (text) => {
        this.setState({
            to:text
        });
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
                    <AutoCompleteText placehold='Saindo de...' _data={citys} fun={this.changeFrom}></AutoCompleteText>
                    <AutoCompleteText placehold='Para...' _data={citys} fun={this.changeTo}></AutoCompleteText>
                </View>
                <View style={styles.btnGroup}>
                    <BtnPrimary text='Criar'></BtnPrimary>
                    <BtnSecondary text='Procurar'></BtnSecondary>
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
