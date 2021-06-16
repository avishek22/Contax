import React from 'react'
import {useNavigation} from '@react-navigation/native';

import { View, Text,FlatList, ActivityIndicator,Image,TouchableOpacity,ScrollView } from 'react-native'

import colors from '../../assets/themes/colors'
import AppModal from '../common/AppModal'
import CustomButton from '../common/CustomButton'
import Message from '../common/message'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Icon from '../common/Icon/index'
import styles from '../ContactDetailsComponent/styles'
import { CONTACT_DETAIL, CREATE_CONTACT } from '../../constants/routeNames';
import Container from '../common/Container';
import { navigate } from '../../navigations/SideMenu/RootNavigator';
import ImageComponent from './ImageComponent';


const ContactDetailsComponent = ({
    contact,
   
  }) => {
    const {navigate} = useNavigation();
  
    const {
      contact_picture,
      first_name,
      country_code,
      phone_number,
      last_name,
    } = contact;
  
    return (
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      
      {contact_picture&&<ImageComponent src={contact_picture}></ImageComponent>}
      <View style={styles.content}>
      <Text style={styles.name}>{first_name+" "+last_name}</Text>
      </View>
      <View style={styles.hrLine}></View>
      <View style={styles.topCallOptions}>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="ionicon"
              name="call-outline"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Text</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topCallOption}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Text style={styles.middleText}>Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hrLine}></View>
        <View style={styles.middleCallOptions}>
          <Icon
            type="ionicon"
            name="call-outline"
            color={colors.grey}
            size={27}
          />
          <View style={styles.phoneMobile}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="materialCommunity"
              name="video"
              color={colors.primary}
              size={27}
            />
            <Icon
              type="materialCommunity"
              name="message-text"
              color={colors.primary}
              size={27}
              style={[styles.msgIcon]}
            />
          </View>
        </View>
        <CustomButton
          style={{alignSelf: 'flex-end', marginRight: 20, width: 200}}
          primary
          title="Edit Contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {contact, editing: true});
          }}
        />

      </View>
    
      </ScrollView>
    );
  };

export default ContactDetailsComponent
