import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import colors from '../../../assets/themes/colors';
import Icon from "../Icon/index"
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';

const ImagePicker = React.forwardRef(({onFileSelected},ref) => {
    const options=[
        {name:"Take from camera",icon:<Icon name="camera" color={colors.grey} size={41}></Icon>, onPress:()=>{

            ImagePickerCropper.openCamera({
                width:300,
                height:300,
                cropping:true,
                freeStyleCropEnabled:true
            }).then((images)=>{
                onFileSelected(images)

            }).catch(error=>{
                console.log(`error`, error)
            })
        }},
        {name:"Choose from gallery",icon:<Icon name="image" color={colors.grey} size={41}></Icon>, onPress:()=>{
            ImagePickerCropper.openPicker({
                width:300,
                height:300,
                cropping:true,
                freeStyleCropEnabled:true
            }).then((images)=>{
                onFileSelected(images)

            }).catch(error=>{
                console.log(`error`, error)
            })

        }},
    ]
    return (
        <RBSheet
        ref={ref}
        height={300}
        openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
              borderTopRightRadius:20,
              borderTopLeftRadius:20,
            //   justifyContent: "center",
              alignItems: "center"
              
            
          }
        }}
      >
      <View style={styles.optionswrapper}>
         {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOption}
            key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </RBSheet>
    )

})

export default ImagePicker
