import React, { useRef } from 'react'
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

    const sheetRef=useRef(null)
    const[form,setForm]=useState({})
    const {navigate} = useNavigation();
    const[localFile,setLocalFile]=useState(null)
    const onChangeText=({name,value})=>{
        setForm({...form,[name]:value})
    }
    const onSubmit=()=>{
        console.log(form)
        
        createContact(form)(contactsDispatch)(()=>{
            navigate(CONTACT_LIST)
        })
    }
    const closeSheet=()=>{
        if(sheetRef.current){
            sheetRef.current.close()
        }
    }
    const openSheet=()=>{
        if(sheetRef.current){
            sheetRef.current.open()
        }
    }
    const toggleValueChange=()=>{
        setForm({...form,isFavorite: !form.isFavorite})
    }
    const onFileSelected=(images)=>{
        closeSheet()
        console.log(`images`, images)
        setLocalFile(images)

    }
    return (
        <CreateContactComponent onChangeText={onChangeText} toggleValueChange={toggleValueChange} form={form} onSubmit={onSubmit} setForm={setForm} loading={loading} error={error} sheetRef={sheetRef} closeSheet={closeSheet} openSheet={openSheet} onFileSelected={onFileSelected} localFile={localFile}></CreateContactComponent>
    )
}

export default CreateContact