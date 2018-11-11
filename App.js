import React, { Component } from 'react';
import { createStackNavigator, } from 'react-navigation';
import HomePage from './pages/home-page'
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import HomeLoggedPage from './pages/home-logged';
import SplashScreenPage from './pages/splash-screen';


var initialPage = 'SplashScreen';


export default class App extends React.Component {
  

  render() {
    return (
      <AppNavigator initialRouteName={initialPage} />
    );
  }
}



//APP
const AppNavigator = createStackNavigator({
  SplashScreen: {screen:SplashScreenPage},
  HomePage: { screen: HomePage },
  LoginPage: { screen: LoginPage },
  RegisterPage: {screen: RegisterPage},
  HomeLoggedPage : {screen: HomeLoggedPage}
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: initialPage,
  });