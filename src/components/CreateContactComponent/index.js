import React from 'react'
import { View, Text, Image } from 'react-native'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import Input from '../common/Input'
import styles from './styles'
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general'

const CreateContactComponent = () => {
    return (
        <View style={styles.container}>
            <Container>
            <Image
          width={120}
          height={10}
          source={{uri:  'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'}}
          style={styles.imageView}
        />
        <Text style={styles.chooseText}>Choose Image</Text>
                <Input label="First name" placeholder=" Enter First Name"></Input>
                <Input label="Last name" placeholder=" Enter Last Name"></Input>
                <Input 
                icon={<CountryPicker
                withFilter
                withFlag
                withCountryNameButton={false}
                withCallingCode
                withEmoji
                onSelect={()=>{}}></CountryPicker>}
                iconPosition="left"
                style={{paddingLeft:10}}
                 label="Phone number" placeholder=" Enter Phone Number"></Input>
                
                <CustomButton primary title="Submit"></CustomButton>
            </Container>
        </View>
    )
}

export default CreateContactComponent
