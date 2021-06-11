import React from 'react'
import { useState } from 'react'
import {View,Text} from 'react-native'
import { useContext } from 'react'
import CreateContactComponent from '../../components/CreateContactComponent'
import createContact from '../../context/actions/contacts/createContact'
import { GlobalContext } from '../../context/Provider'
import { CONTACT_LIST } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/core'
const CreateContact=()=>{
    const {
        contactsDispatch,
        contactsState: {
          createContact: {loading, error},
        },
      } = useContext(GlobalContext);
    const[form,setForm]=useState({})
    const {navigate} = useNavigation();
    const onChangeText=({name,value})=>{
        setForm({...form,[name]:value})
    }
    const onSubmit=()=>{
        console.log(form)
        
        createContact(form)(contactsDispatch)(()=>{
            navigate(CONTACT_LIST)
        })
    }
    return (
        <CreateContactComponent onChangeText={onChangeText} form={form} onSubmit={onSubmit} setForm={setForm} loading={loading} error={error}></CreateContactComponent>
    )
}

export default CreateContact