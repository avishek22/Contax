import { useRoute } from '@react-navigation/native'
import React from 'react'
import {View,Text} from 'react-native'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'
const ContactDetail=()=>{
    const {params:{item={}}={}}=useRoute()
    console.log(`item`, item)
    return (
       <ContactDetailsComponent contact={item}></ContactDetailsComponent>
    )
}

export default ContactDetail