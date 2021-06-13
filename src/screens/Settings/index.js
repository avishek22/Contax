import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {View,Text} from 'react-native'
import { useEffect, useState } from 'react/cjs/react.development'
import SettingsComponent from '../../components/SettingsComponent'
const Settings=()=>{
    
    const [email,setEmail]=useState(null)

    const[modalVisible,setModalVisible]=useState(false)
    const[sortBy,setSortBy]=useState(null)
    
    const saveSetting=(key,value)=>{
        AsyncStorage.setItem(key,value)
    }

    const getSettings= async()=>{

        const user=await AsyncStorage.getItem('user')
        setEmail(JSON.parse(user).email)

        const sortPref=await AsyncStorage.getItem('sortBy')
        if(sortPref)
        setSortBy(sortPref)
    }

    const settingsOptions=[
        {title:"My Info",subTitle:"Setup your Profile",onPress:()=>{

        }},
        {title:"Accounts",subTitle:null,onPress:()=>{

        }},{title:"Default account for new contacts",subTitle:email,onPress:()=>{

        }},{title:"Contacts to display",subTitle:"All Contacts",onPress:()=>{

        }},{title:"Sort by",subTitle:sortBy,onPress:()=>{
            setModalVisible(true)

        }},{title:"Name format",subTitle:"First name first",onPress:()=>{

        }},{title:"Import",subTitle:null,onPress:()=>{

        }},{title:"Export",subTitle:null,onPress:()=>{

        }},{title:"Blocked numbers",subTitle:null,onPress:()=>{

        }},{title:"About Contax",subTitle:null,onPress:()=>{

        }},
    ]

    const prefArr=[{name:"First Name",selected:sortBy==='First Name',onPress:()=>{
        saveSetting('sortBy','First Name')
        setSortBy("First Name")
        setModalVisible(false)

    }},
    {name:"Last Name",selected:sortBy==="Last Name",onPress:()=>{
        saveSetting('sortBy','Last Name')
        setSortBy("Last Name")
        setModalVisible(false)

    }},
    ]
    useEffect(()=>{
        getSettings()
    })
    return (
        <SettingsComponent settingsOptions={settingsOptions} modalVisible={modalVisible} setModalVisible={setModalVisible} prefArr={prefArr}></SettingsComponent>
        
    )
}

export default Settings