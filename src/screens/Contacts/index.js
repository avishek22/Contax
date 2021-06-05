import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {View,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useEffect } from 'react/cjs/react.development'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const Contacts=()=>{
    const {setOptions,toggleDrawer}=useNavigation()
    useEffect(()=>{
        setOptions({headerLeft:()=><TouchableOpacity onPress={()=>{
            toggleDrawer()
        }}><MaterialIcon name="menu" size={21} style={{padding:10}} ></MaterialIcon></TouchableOpacity>})
    })
    return (
        <View>
            <Text>Hi from Contacts</Text>
        </View>
    )
}

export default Contacts