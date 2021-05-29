import React from 'react'
import { View, TextInput,Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react/cjs/react.development'
import colors from '../../../assets/themes/colors'
import styles from './styles'

const CustomButton = ({title,secondary,primary,danger,disabled,loading,onPress,...props}) => {
    const [focused,setFocused]=useState(false)
    const getFlexDirection=()=>{
        if(icon && iconPosition){
            if(iconPosition=='left')
            return "row"
            return "row-reverse"
        }
    }
    const getBackgroundColor=()=>{
        if(disabled)
        return colors.grey
        if(primary){
            return colors.primary
        }
        if(danger){
            return colors.danger
        }
        if(secondary){
            return colors.secondary
        }
        else{
            return colors.grey
        }
    }
    return (
        
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBackgroundColor()}]} disabled={disabled}
        onPress={onPress}>
        <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={primary?colors.success:colors.primary} ></ActivityIndicator>}
        {title && <Text style={{color:disabled?"black":colors.white,paddingLeft:loading?5:0}}>{title}</Text>}
        </View>
        
        
  
      </TouchableOpacity>
      
    )
}

export default CustomButton
