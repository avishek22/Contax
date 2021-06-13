import React from 'react'
import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import Container from '../../components/common/Container/index'
import AppModal from '../common/AppModal'
import Icon from '../common/Icon'

const SettingsComponent = ({modalVisible,setModalVisible,settingsOptions,prefArr}) => {
    return (

        <>
        <AppModal
        modalVisible={modalVisible} modalFooter={<></>} modalBody={<View>
           {prefArr.map(({name,selected,onPress})=>
                <View style={{
                    paddingHorizontal:20,
                    paddingBottom:5,
                    paddingTop:10
                }}>
                <TouchableOpacity key={name} onPress={onPress} style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                {selected&& <Icon size={21} name="check" type="material"></Icon>}
                    <Text style={{
                        fontSize:17,
                        paddingLeft: selected ?10:30,
                        paddingVertical:10
                    }}>{name}</Text>
                    </TouchableOpacity>
                </View>)}
        </View>}
        title="Sort By" setModalVisible={setModalVisible}></AppModal>
        
        <ScrollView style={{backgroundColor:'white'}}>
            {settingsOptions.map(({title,subTitle,onPress,index})=><TouchableOpacity key={title} onPress={onPress}>
                <View style={{
                    paddingHorizontal:20,
                    paddingBottom:20,
                    paddingTop:20
                }}>
                    <Text style={{
                        fontSize:17
                    }}>{title}</Text>
                    {subTitle && <Text style={{
                        fontSize:14,color:'grey',paddingTop:5
                    }}>{subTitle}</Text>}
                </View>
                <View style={{height:0.5,backgroundColor:'grey'}}></View>
            </TouchableOpacity>)}
        </ScrollView>
        </>
    )
}

export default SettingsComponent
