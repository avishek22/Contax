import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {View,Text} from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'
const ContactDetail=()=>{
    const {params:{item={}}={}}=useRoute()
    console.log(`item`, item)
    const {setOptions}=useNavigation()

    useEffect(()=>{
        setOptions({
            title:item.first_name+" "+item.last_name
        })
    },[item])
    return (
       <ContactDetailsComponent contact={item}></ContactDetailsComponent>
    )
}

export default ContactDetail