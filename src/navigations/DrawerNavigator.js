import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {View,Text, SafeAreaView} from 'react-native'
import HomeNavigator from './HomeNavigator'
import { HOME_NAVIGATOR } from '../constants/routeNames'
import Container from '../components/common/Container'
import SideMenu from './SideMenu'

const getDrawerContent=navigation=>{
    return <SideMenu navigation={navigation}></SideMenu>
}

function DrawerNavigator() {
    const Drawer=createDrawerNavigator()
    return (
        <Drawer.Navigator drawerType="slide" drawerContent={({navigation})=>getDrawerContent(navigation)}>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
            
            
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
