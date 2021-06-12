import React from 'react'
import {View,Text} from 'react-native'
import SettingsComponent from '../../components/SettingsComponent'
const Settings=()=>{
    const settingsOptions=[
        {title:"My Info",subTitle:"Setup your Profile",onPress:()=>{

        }},
        {title:"Accounts",subTitle:null,onPress:()=>{

        }},{title:"Default account for new contacts",subTitle:"Hello@hello.om",onPress:()=>{

        }},{title:"Contacts to display",subTitle:"All Contacts",onPress:()=>{

        }},{title:"Sort by",subTitle:"First name",onPress:()=>{

        }},{title:"Name format",subTitle:"First name first",onPress:()=>{

        }},{title:"Import",subTitle:null,onPress:()=>{

        }},{title:"Export",subTitle:null,onPress:()=>{

        }},{title:"Blocked numbers",subTitle:null,onPress:()=>{

        }},{title:"About Contax",subTitle:null,onPress:()=>{

        }},
    ]
    return (
        <SettingsComponent settingsOptions={settingsOptions}></SettingsComponent>
        
    )
}

export default Settings