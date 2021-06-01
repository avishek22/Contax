import React from 'react'
import { View, TextInput,Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react/cjs/react.development'
import colors from '../../../assets/themes/colors'
import styles from './styles'

const Message
 = ({message,secondary,primary,danger,disabled,info,loading,onPress,success,retry,retryFn,onDismiss,...props}) => {
    const [focused,setFocused]=useState(false)
    const[userDimissed,setDismissed]=useState(false)
    // const getFlexDirection=()=>{
    //     if(icon && iconPosition){
    //         if(iconPosition=='left')
    //         return "row"
    //         return "row-reverse"
    //     }
    // }
    const getBackgroundColor=()=>{
        
        if(primary){
            return colors.primary
        }
        if(danger){
            return colors.danger
        }
        if(success){
            return colors.success
        }
        if(info){
            return colors.info
        }
        else{
            return colors.secondary
        }
    }
    return (
        <>
        {userDimissed?null:
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBackgroundColor()}]}
        >
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
        {message && <Text style={{color:colors.white}}>{message}</Text>}
        {retry && !typeof onDismiss==='function' &&<TouchableOpacity onPress={retryFn}><Text style={{color:colors.white}}>Retry</Text></TouchableOpacity> }
        {typeof onDismiss==='function' && <TouchableOpacity onPress={()=>{
            setDismissed(true)
            onDismiss()
        }}><Text style={{color:colors.white}}>X</Text></TouchableOpacity> }
        </View>
        
        
        
  
      </TouchableOpacity>}
      </>
      
    )
}

export default Message

