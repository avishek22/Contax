import React from 'react'
import { View, Text } from 'react-native'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'

const ContactsComponent = ({modalVisible,setModalVisible}) => {
    return (
        <View>
            <AppModal setModalVisible={setModalVisible} modalVisible={modalVisible}
            title="My Profile" modalBody={<View><Text>Hello from modal</Text></View>}></AppModal>
            <CustomButton title="Open modal" secondary onPress={()=>{
                setModalVisible(true)
            }}></CustomButton>
        </View>
    )
}

export default ContactsComponent
