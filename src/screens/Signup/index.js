import React,{useState} from 'react'
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import styles from './styles'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames'
import { onChange } from 'react-native-reanimated'


const Signup=()=>{
    const[value,setValue]=useState('')
    const[form,setForm]=useState({})
    const[errors,setErrors]=useState({})
    const onChange=({name,value})=>{
        setForm({...form,[name]:value})
        if(value!==''){
            if(name==='password'){
                if(value.length < 6){
                setErrors(prev=>{
                    return {...prev,[name]:"Password should be greater than 6"}
                })
            }
            }
            setErrors(prev=>{
                return {...prev,[name]:null}
            })
        }
        else{
            setErrors(prev=>{
                return {...prev,[name]:'This field is required'}
            })
        }
        
        }
        
    
    const onSubmit=()=>{
        if(!form.userName){
            setErrors(prev=>{
                return {...prev,userName:"Please add an Username"}
            })
        }
        if(!form.firstName){
            setErrors(prev=>{
                return {...prev,firstName:"Please add a Firstname"}
            })
        }
        if(!form.lastName){
            setErrors(prev=>{
                return {...prev,lastName:"Please add a Lastname"}
            })
        }
        if(!form.password){
            setErrors(prev=>{
                return {...prev,password:"Please add a Password"}
            })
        }
        if(!form.email){
            setErrors(prev=>{
                return {...prev,email:"Please add an Email"}
            })
        }

    }
    const {navigate}=useNavigation()
    return (
        <Container>
        <Image height={70} width={70} source={require('../../assets/images/Signup.png')} style={styles.logo}></Image>
          <View>
          <Text style={styles.title}>Welcome to Contax</Text>
          <Text style={styles.subtitle}>Create a free account</Text>
          <View style={styles.form}>
          <Input
        placeholder="Enter Username"
        label='Username'    
        onChangeText={(value)=>{
            onChange({name:"userName",value})
        }}
        iconPosition="right"
        error={errors.userName}
      
      />

        <Input
        placeholder="Enter Firstname"
        label='Firstname'    
        onChangeText={(value)=>{
            onChange({name:"firstName",value})
        }}
        iconPosition="right"
        error={errors.firstName}
      

      />

<Input
        placeholder="Enter Lastname"
        label='Lastname'    
        onChangeText={(value)=>{
            onChange({name:'lastName',value})
        }}
        iconPosition="right"
        error={errors.lastName}
      

      />
      <Input
        placeholder="Enter Email"
        label='Email'    
        onChangeText={(value)=>{
            onChange({name:"email",value})
        }}
        iconPosition="right"
        error={errors.email}
      

      />
      
      <Input
        icon={<Text>SHOW</Text>}
        placeholder="Enter password"
        label='Password'    
        onChangeText={(value)=>{
            onChange({name:'password',value})
        }}
        iconPosition="right"
        error={errors.password}
        secureTextEntry={true}
       
      />
      
    <CustomButton secondary title="Submit" 
    onPress={onSubmit}></CustomButton></View>
     <View style={styles.signupSection}>
      <Text style={styles.infoText}>Already have an account?</Text>
      <TouchableOpacity onPress={()=>{navigate(LOGIN)}}><Text style={styles.linkSignup}>Log In</Text></TouchableOpacity>
    </View>
    {/* <CustomButton primary title="Submit" loading={true}></CustomButton>
    <CustomButton secondary title="Submit" loading={true}></CustomButton>
    <CustomButton danger title="Submit" loading={true}></CustomButton> */}  
    </View>
            </Container>
    )
}

export default Signup