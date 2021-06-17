import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext } from 'react'
import {View,Text, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import ContactDetailsComponent from '../../components/ContactDetailsComponent'
import Icon from '../../components/common/Icon'
import colors from '../../assets/themes/colors'
import { GlobalContext } from '../../context/Provider'
import deleteContact from '../../context/actions/contacts/deleteContact'
import { navigate } from '../../navigations/SideMenu/RootNavigator'
import { CONTACT_LIST } from '../../constants/routeNames'
const ContactDetail=()=>{
    const {params:{item={}}={}}=useRoute()
    console.log(`item`, item)
    const {setOptions}=useNavigation()
    const{
        contactsDispatch,
        contactsState:{deleteContact:{loading}}
        
        
    }=useContext(GlobalContext)

    useEffect(()=>{
        setOptions({
            title:item.first_name+" "+item.last_name,
            headerRight:()=>{
                return<View style={{flexDirection:'row',paddingRight:10}}>
                    <TouchableOpacity >
                    <Icon color={colors.grey} size={21} name={item.is_favorite?"star":"star-border"} type="material"></Icon>
                    
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft:10}} onPress={()=>{
                        Alert.alert('Delete!', 'Are you sure you want to remove '+item.first_name, [
          {
            text: 'Cancel',
            onPress: () => {},
          },
    
          {
            text: 'OK',
            onPress: () => {
                console.log('click')
                deleteContact(item.id)(contactsDispatch)(()=>{
                            navigate(CONTACT_LIST)
                        })
            },
          },
        ]);
                        

                    }}>
                    {loading?(<ActivityIndicator size="small" color={colors.primary}></ActivityIndicator>):(<Icon size={21} color={colors.grey} name="delete" type="material"></Icon>)}
                    
                    </TouchableOpacity>
                    
                </View>
            }
        })
    },[item,loading])
    return (
       <ContactDetailsComponent contact={item}></ContactDetailsComponent>
    )
}

export default ContactDetail