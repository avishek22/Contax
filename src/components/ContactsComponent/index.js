import React from 'react'
import { View, Text,FlatList, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/themes/colors'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'
import Message from '../common/message'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styles from '../ContactsComponent/styles'

const ListEmptyComponent=()=>{
    return <View style={{padding:100}}>
        <Message danger message="No contacts to show"></Message>
    </View>
}

const renderItem=({item})=>{
    console.log('item',item)
    const{contact_picture,first_name,last_name,phone_number}=item
    return <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
            {contact_picture?<Image style={{width:45,height:45,borderRadius:100}} source={{uri:contact_picture}}></Image>:
            <View style={{width:45,height:45,backgroundColor:colors.grey}}></View>}
            <View style={{flexDirection:'row'}}>
                <Text>{first_name}</Text>
                <Text>{last_name}</Text>
            </View>
            <Text>{phone_number}</Text>
        </View>
        <MaterialIcon name="right"></MaterialIcon>
    </TouchableOpacity>
}

const ContactsComponent = ({modalVisible,setModalVisible,data,loading}) => {
    return (
        <View>
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
    )
}

export default ContactsComponent
