import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {View,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react/cjs/react.development'
const Contacts=()=>{
    const {setOptions,toggleDrawer}=useNavigation()
    useEffect(()=>{
        setOptions({headerLeft:()=><TouchableOpacity onPress={()=>{
            toggleDrawer()
        }}><Text style={{padding:10}}>NAV</Text></TouchableOpacity>})
    })
    return (
        <View>
            <Text>Hi from Contacts</Text>
        </View>
    )
}

export default Contacts