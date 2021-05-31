import React,{useState} from 'react'
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import styles from './styles'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { SIGNUP } from '../../constants/routeNames'
import { useNavigation } from '@react-navigation/native';


const Login=()=>{
    const[value,setValue]=useState('')
    const {navigate}=useNavigation()
    return (
        <Container>
        <Image height={70} width={70} source={require('../../assets/images/Logo.png')} style={styles.logo}></Image>
          <View>
          <Text style={styles.title}>Welcome to Contax</Text>
          <Text style={styles.subtitle}>Please Login</Text>
          <View style={styles.form}>
          <Input
        placeholder="Enter Username"
        label='Username'    
        onChangeText={(e)=>{setValue(e)}}
        value={value}
        iconPosition="right"
        error={"This field is required"}
      
      />
      
      <Input
        icon={<Text>SHOW</Text>}
        placeholder="Enter password"
        label='Password'    
        onChangeText={(e)=>{setValue(e)}}
        value={value}
        iconPosition="right"
        error={"This field is required"}
        secureTextEntry={true}
       
      />
      
    <CustomButton secondary title="Submit" loading={true}disabled={true}></CustomButton></View>
    <View style={styles.signupSection}>
      <Text style={styles.infoText}>Need a new account?</Text>
      <TouchableOpacity onPress={()=>{navigate(SIGNUP)}}><Text style={styles.linkSignup}>Sign Up</Text></TouchableOpacity>
    </View>
    {/* <CustomButton primary title="Submit" loading={true}></CustomButton>
    <CustomButton secondary title="Submit" loading={true}></CustomButton>
    <CustomButton danger title="Submit" loading={true}></CustomButton> */}  
    </View>
            </Container>
    )
}

export default Login