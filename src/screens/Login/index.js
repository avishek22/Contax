import React,{useState} from 'react'
import {View,Text,TextInput} from 'react-native'
import Container from '../../components/common/Container'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
const Login=()=>{
    const[value,setValue]=useState('')
    return (
        <Container>
            <Input
        
        label='Username'    
        onChangeText={(e)=>{setValue(e)}}
        value={value}
        iconPosition="right"
        error={"This field is required"}
      />
      <Input
        icon={<Text>HIDE</Text>}
        label='Password'    
        onChangeText={(e)=>{setValue(e)}}
        value={value}
        iconPosition="right"
        error={"This field is required"}
       
      />
    <CustomButton secondary title="Submit" loading={true}disabled={true}></CustomButton>
    <CustomButton primary title="Submit" loading={true}></CustomButton>
    <CustomButton secondary title="Submit" loading={true}></CustomButton>
    <CustomButton danger title="Submit" loading={true}></CustomButton>
            </Container>
    )
}

export default Login