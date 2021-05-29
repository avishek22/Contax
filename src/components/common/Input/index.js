import React from 'react'
import { View, TextInput,Text } from 'react-native'
import { useState } from 'react/cjs/react.development'
import colors from '../../../assets/themes/colors'
import styles from './styles'

const Input = ({onChangeText,value,style,label,icon,iconPosition,error,...props}) => {
    const [focused,setFocused]=useState(false)
    const getFlexDirection=()=>{
        if(icon && iconPosition){
            if(iconPosition=='left')
            return "row"
            return "row-reverse"
        }
    }
    const getBorderColor=()=>{
        if(focused){
            return colors.primary
        }
        if(error){
            return colors.danger
        }
        else{
            return colors.grey
        }
    }
    return (
        
        <View style={styles.inputContainer}>
        {label && <Text>{label}</Text>}
  
        <View style={[styles.wrapper,{borderColor:getBorderColor()},{flexDirection:getFlexDirection()}]}>
          <View>{icon && icon}</View>
  
          <TextInput
            style={[styles.textInput, style]}
            onChangeText={onChangeText}
            value={value}
            onFocus={()=>{setFocused(true)}}
            onBlur={()=>setFocused(false)}
            {...props}
            
          />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      
    )
}

export default Input
