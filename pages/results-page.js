import React, { Component } from 'react';
import PasswordInput from '../props/input-password'
import BtnWhite from '../props/btn-white';
import {  StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import RowKaronaResult from '../props/row-karona-result';
import { Icon } from 'react-native-elements'

const CONF = require('../conf/conf');


export default class ResultPage extends React.Component {

    constructor(props){
        super(props);
        //get karonas from param
        const {navigation} = this.props;
        const karonas = navigation.getParam('karonas');
        //set in state
        this.state = {
            karonas:karonas,
        };
        //log
        console.log('====================================');
        console.log(karonas);
        console.log('====================================');
    }

    backPage = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.backPage}>
                        <Icon name="arrow-back" color='#000'/>
                    </TouchableOpacity>
                    <View style={styles.textContainer}>
                        <Text style={styles.textCenter}>Resultados</Text>
                    </View>
                </View>
                {
                    this.state.karonas.map((u)=>{
                        return (
                            <RowKaronaResult key={u.id} date={u.day} hour={u.hour}
                            to={u.to} from={u.from} price={u.price}></RowKaronaResult>
                        );
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginRight:20,
        marginLeft:20,
    },
    textContainer: {
        flex:1,
    },
    textCenter:{
        alignSelf:'center',
        fontFamily:'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        color:'#000',
        marginLeft:'-4%',
    },
    header: {
        marginTop:20,
        marginBottom:20,
        display:'flex',
        flexDirection:'row',
        height:35,
    }
});
