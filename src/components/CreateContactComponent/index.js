import React from 'react'
import { View, Text, Image,Switch } from 'react-native'
import Container from '../common/Container'
import CustomButton from '../common/CustomButton'
import Input from '../common/Input'
import styles from './styles'
import CountryPicker from 'react-native-country-picker-modal'
import { DEFAULT_IMAGE_URI } from '../../constants/general'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

const CreateContactComponent = ({onChangeText,form,onSubmit,setForm,error,loading,toggleValueChange}) => {
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
                <Input label="First name" placeholder=" Enter First Name"
                error={error?.first_name?.[0]}
                onChangeText={(value)=>{
                    onChangeText({name:'firstName',value:value})
                }}></Input>
                <Input label="Last name" placeholder=" Enter Last Name"
                error={error?.last_name?.[0]}
                onChangeText={(value)=>{
                    onChangeText({name:'lastName',value:value})
                }}></Input>
                <Input 
                error={error?.phone_number?.[0]}
                icon={<CountryPicker
                withFilter
                withFlag
                countryCode={form.countryCode || undefined}
                withCountryNameButton={false}
                withCallingCode
                withCallingCodeButton
                withEmoji
                onSelect={(v)=>{
                    const phoneCode=v.callingCode[0]
                    const cCode=v.cca2
                    setForm({...form,phoneCode:phoneCode,countryCode:cCode})
                    
                }}></CountryPicker>}
                iconPosition="left"
                onChangeText={(value)=>{
                    onChangeText({name:'phoneNumber',value:value})
                }}
                style={{paddingLeft:10}}
                 label="Phone number" placeholder=" Enter Phone Number"></Input>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10,alignItems:'center'}}>
                    <Text style={{fontSize:17}}>Add to favorites</Text>
                    <Switch
                    trackColor={{false:'#767577',true:'#81b0ff'}}
                    thumbColor={form.isFavorite?"#f5dd4b":"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleValueChange}
                    value={form.isFavorite}></Switch>
                </View>
                <CustomButton loading={loading} disabled={loading} onPress={onSubmit} primary title="Submit"></CustomButton>
            </Container>
        </View>
    )
}

export default CreateContactComponent
