import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'
import Icon from '../../components/common/Icon'
import colors from '../../assets/themes/colors'
const ContactDetail=()=>{
    const {params:{item={}}={}}=useRoute()
    console.log(`item`, item)
    const {setOptions}=useNavigation()

    useEffect(()=>{
        setOptions({
            title:item.first_name+" "+item.last_name,
            headerRight:()=>{
                return<View style={{flexDirection:'row',paddingRight:10}}>
                    <TouchableOpacity>
                    <Icon color={colors.grey} size={21} name={item.is_favorite?"star":"star-border"} type="material"></Icon>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft:10}}>
                    <Icon size={21} color={colors.grey} name="delete" type="material"></Icon>
                    
                    </TouchableOpacity>
                    
                </View>
            }
        })
    },[item])
    return (
       <ContactDetailsComponent contact={item}></ContactDetailsComponent>
    )
}

export default ContactDetail