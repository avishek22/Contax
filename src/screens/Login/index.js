import React,{useState,useContext} from 'react'
import {View,Text,TextInput,Image, TouchableOpacity} from 'react-native'
import Container from '../../components/common/Container'
import styles from './styles'
import CustomButton from '../../components/common/CustomButton'
import Input from '../../components/common/Input'
import { SIGNUP } from '../../constants/routeNames'
import { useNavigation, useRoute } from '@react-navigation/native';
import Message from '../../components/common/message'
import { GlobalContext } from '../../context/Provider'
import loginUser from '../../context/actions/auth/loginUser'


const Login=()=>{
    const [form,setForm]=useState({})
    const {navigate}=useNavigation()
    const{params}=useRoute()
    const[isSecureEntry,setIsSecureEntry]=useState(true)
    const{authDispatch,authState:{error,loading}}=useContext(GlobalContext)
    const[justSignedUp,setJustSignedUp]=useState(false)
    React.useEffect(() => {
      if (params?.data) {
        setJustSignedUp(true);
        console.log('param',params)
        setForm({...form, userName: params.data.username});
        console.log(form.userName)
      }
    }, [params]);
    const onSubmit=()=>{
      if(form.userName && form.password){
        console.log(form)
        loginUser(form)(authDispatch)
      }
    }
    const onChange=({name,value})=>{
      setForm({...form,[name]:value})
      setJustSignedUp(false)
    }
    return (
        <Container>
        <Image height={70} width={70} source={require('../../assets/images/Logo.png')} style={styles.logo}></Image>
          <View>
          <Text style={styles.title}>Welcome to Contax</Text>
          <Text style={styles.subtitle}>Please Login</Text>
          
          <View style={styles.form}>
          {error && !error.error && <Message retry retryFn={()=>{
            console.log("click")
          }} message="invalid creds" danger onDismiss={()=>{}}></Message>}
          {error?.error && <Message retry retryFn={()=>{
            console.log("click")
          }} message={error?.error} danger onDismiss={()=>{}}></Message>}
          {justSignedUp&&<Message retry retryFn={()=>{
            console.log("click")
          }} message="Account created succesfully." success onDismiss={()=>{}}></Message>}
          <Input
        placeholder="Enter Username"
        label='Username'    
        iconPosition="right"
        error={error?.username?.[0]}
        value={form.userName||null}
        onChangeText={(value)=>{
          onChange({name:'userName',value})
        }}
        
        //error={"This field is required"}
      
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
       
        iconPosition="right"
        //error={"This field is required"}
        error={error?.password?.[0]}
        onChangeText={(value)=>{
          onChange({name:'password',value})
        }}
        secureTextEntry={isSecureEntry}
       
      />
      
    <CustomButton secondary title="Submit" loading={loading} disabled={loading} onPress={onSubmit}></CustomButton></View>
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