import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View,Text} from 'react-native'
import { LOGIN, SIGNUP } from '../constants/routeNames'
import Login from '../screens/Login'
import Signup from '../screens/Signup'



function AuthNavigator() {
    const AuthStack=createStackNavigator()
    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={SIGNUP} component={Signup}></AuthStack.Screen>
            
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
