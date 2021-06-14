import React, { useRef } from 'react'
import { useState } from 'react'
import {View,Text} from 'react-native'
import { useContext } from 'react'
import CreateContactComponent from '../../components/CreateContactComponent'
import createContact from '../../context/actions/contacts/createContact'
import { GlobalContext } from '../../context/Provider'
import { CONTACT_DETAIL, CONTACT_LIST } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/core'
import uploadImage from '../../helpers/uploadImage'
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
    const[uploading,setUploading]=useState(false)
    const[localFile,setLocalFile]=useState(null)
    const onChangeText=({name,value})=>{
        setForm({...form,[name]:value})
    }
    const onSubmit=()=>{
        console.log(form)
        console.log(`localFile`, localFile)

         if (localFile?.size) {
             setUploading(true);
             uploadImage(localFile)((url) => {
               setUploading(false);
               console.log(`success img url`)
               createContact(
                 {...form, contactPicture: url}
               )(contactsDispatch)(() => {
                 navigate(CONTACT_LIST);
               });
             })((err) => {
               console.log('after upload err :>> ', err);
               setUploading(false);
             });
           }
        
        createContact(form)(contactsDispatch)(()=>{
            console.log('here')
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
        <CreateContactComponent onChangeText={onChangeText} toggleValueChange={toggleValueChange} form={form} onSubmit={onSubmit} setForm={setForm} loading={loading||uploading} error={error} sheetRef={sheetRef} closeSheet={closeSheet} openSheet={openSheet} onFileSelected={onFileSelected} localFile={localFile}></CreateContactComponent>
    )
}

export default CreateContact