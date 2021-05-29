import 'react-native-gesture-handler';
import React ,{useContext}from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native'
import { AppRegistry } from "react-native";
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator copy';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider'
const AppNavContainer=()=>{
  const loggedIn=true
  const {authState:{isLoggedIn}}=useContext(GlobalContext)
  console.log('state>>',isLoggedIn)
    return(
        <NavigationContainer>{isLoggedIn?<DrawerNavigator></DrawerNavigator>:<AuthNavigator></AuthNavigator>}</NavigationContainer>
  
    )
}

export default AppNavContainer