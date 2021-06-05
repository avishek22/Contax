import React,{useState,useEffect} from 'react'
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import styles from './styles'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames'
import { onChange } from 'react-native-reanimated'
import axiosInstance from '../../helpers/axiosInterceptor'
import register from '../../context/actions/auth/register'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Provider'


const Signup=()=>{
    const[value,setValue]=useState('')
    const[form,setForm]=useState({})
    const[errors,setErrors]=useState({})
    const[isSecureEntry,setIsSecureEntry]=useState(true)
    const{authDispatch,authState:{error,loading,data}}=useContext(GlobalContext)
    
    // useEffect(()=>{
    //     axiosInstance.get("/contacts").catch((err)=>{
    //         console.log('err',err)
    //     })
    // },[])
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
        console.log('1111',11110)

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
          ) {
            register(form)(authDispatch)((response) => {
              navigate(LOGIN, {data: response});
            });
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
        error={errors.userName || error?.username?.[0]}
      
      />

        <Input
        placeholder="Enter Firstname"
        label='Firstname'    
        onChangeText={(value)=>{
            onChange({name:"firstName",value})
        }}
        iconPosition="right"
        error={errors.firstName ||error?.first_name?.[0]}
      

      />

<Input
        placeholder="Enter Lastname"
        label='Lastname'    
        onChangeText={(value)=>{
            onChange({name:'lastName',value})
        }}
        iconPosition="right"
        error={errors.lastName ||error?.last_name?.[0]}
      

      />
      <Input
        placeholder="Enter Email"
        label='Email'    
        onChangeText={(value)=>{
            onChange({name:"email",value})
        }}
        iconPosition="right"
        error={errors.email ||error?.email?.[0]}
      

      />
      
      <Input
         icon={
        <TouchableOpacity onPress={()=>{
          setIsSecureEntry((prev)=>!prev)
        }}>
          <Text>{isSecureEntry?"SHOW":"HIDE"}</Text>
        </TouchableOpacity>}
        placeholder="Enter password"
        label='Password'    
        onChangeText={(value)=>{
            onChange({name:'password',value})
        }}
        iconPosition="right"
        error={errors.password ||error?.password?.[0]}
        secureTextEntry={isSecureEntry}
       
      />
      
    <CustomButton secondary title="Submit" loading={loading} disabled={loading}
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