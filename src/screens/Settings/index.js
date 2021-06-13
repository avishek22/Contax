import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {View,Text} from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import SettingsComponent from '../../components/SettingsComponent'
const Settings=()=>{
    
    const [email,setEmail]=useState(null)

    const getSettings= async()=>{

        const user=await AsyncStorage.getItem('user')
        setEmail(JSON.parse(user).email)
    }

    const settingsOptions=[
        {title:"My Info",subTitle:"Setup your Profile",onPress:()=>{

        }},
        {title:"Accounts",subTitle:null,onPress:()=>{

        }},{title:"Default account for new contacts",subTitle:email,onPress:()=>{

        }},{title:"Contacts to display",subTitle:"All Contacts",onPress:()=>{

        }},{title:"Sort by",subTitle:"First name",onPress:()=>{

        }},{title:"Name format",subTitle:"First name first",onPress:()=>{

        }},{title:"Import",subTitle:null,onPress:()=>{

        }},{title:"Export",subTitle:null,onPress:()=>{

        }},{title:"Blocked numbers",subTitle:null,onPress:()=>{

        }},{title:"About Contax",subTitle:null,onPress:()=>{

        }},
    ]
    useEffect(()=>{
        getSettings()
    })
    return (
        <SettingsComponent settingsOptions={settingsOptions}></SettingsComponent>
        
    )
}

export default Settings