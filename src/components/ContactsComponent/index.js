import React from 'react'
import {useNavigation} from '@react-navigation/native';

import { View, Text,FlatList, ActivityIndicator,Image,TouchableOpacity } from 'react-native'

import colors from '../../assets/themes/colors'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'
import Message from '../common/message'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from '../common/Icon/index'
import styles from '../ContactsComponent/styles'
import { CREATE_CONTACT } from '../../constants/routeNames';
import Container from '../common/Container';

const ListEmptyComponent=()=>{
    return <View style={{padding:100}}>
        <Message danger message="No contacts to show"></Message>
    </View>
}


const renderItem=({item})=>{
    console.log('item',item)
    const{contact_picture,first_name,last_name,phone_number,country_code}=item
    return <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            {contact_picture?<Image style={{width:45,height:45,borderRadius:100}} source={{uri:contact_picture}}></Image>:
            <View style={{width:45,height:45,backgroundColor:colors.grey,flexDirection:'row',justifyContent:'center',alignItems:'center',borderRadius:100}}>
                <Text style={[styles.name,{color:colors.white}]}>{first_name[0]}</Text>
                <Text style={[styles.name,{color:colors.white}]}>{last_name[0]}</Text>
            </View>}
            <View style={{paddingLeft:20}}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.name}>{first_name}</Text>
                <Text> </Text>
                <Text style={styles.name}>{last_name}</Text></View>
                <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
            </View>
            
        </View>
        <Icon name="right" type="ant" size={17} color={colors.grey} style={styles.icon}></Icon>
        
        
        
    </TouchableOpacity>
}

const ContactsComponent = ({modalVisible,setModalVisible,data,loading}) => {
    const {navigate} = useNavigation();
    return (
        <Container style={{padding:0}}>
        <View style={{backgroundColor:colors.white}}>
            <AppModal setModalVisible={setModalVisible} modalVisible={modalVisible}
            title="My Profile" modalBody={<View><Text>Hello from modal</Text></View>}></AppModal>
            {/* <CustomButton title="Open modal" secondary onPress={()=>{
                setModalVisible(true)
            }}></CustomButton> */}
            {loading && (<View style={{padding:100}}><ActivityIndicator size="large" color={colors.primary}></ActivityIndicator></View>)}
            {!loading &&(<View style={{paddingVertical:20}}><FlatList renderItem={renderItem} keyExtractor={(item)=>String(item.id)} data={data} ListEmptyComponent={ListEmptyComponent} ListFooterComponent={
                <View style={{height:150}}></View>
            }></FlatList></View>)}
            
        </View>
      <TouchableOpacity
        style={{backgroundColor:'red',width:55,
       height:55,
       position:'absolute',
       bottom:15,
       left:'80%',
       borderRadius:100,
       justifyContent:'center',
       alignItems:'center'
       }}
         onPress={() => {
            navigate(CREATE_CONTACT);
         }}
        >
        <Icon name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
        
        
        </Container>
        
    )
}

export default ContactsComponent
