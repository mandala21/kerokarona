import React, { Component } from 'react';
import { StyleSheet, View, Image  } from 'react-native';
import { AsyncStorage } from "react-native";




export default class SplashScreenPage extends React.Component {
  constructor(props){
    super(props);
    //call check login with delay 3s
    setTimeout(this._retrieveData,3000);
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log(value);
        this.props.navigation.navigate('HomeLoggedPage',{
          token:value,
        });
      } else {
        this.props.navigation.navigate('HomePage');
      }
     } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      Alert.alert('Error','Houve um erro ao recuperar o seu Token, tente realizar o login. Caso persista o erro, entre em contato com o suporte :)');
     }
  }

  render() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/car_2.png')} style={styles.logo} />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    logo: {
        width:100,
        height:100,      
    },
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center',
    },
})