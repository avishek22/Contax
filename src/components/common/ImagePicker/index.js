import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import colors from '../../../assets/themes/colors';
import Icon from "../Icon/index"
import styles from './styles';

const ImagePicker = React.forwardRef(({},ref) => {
    const options=[
        {name:"Take from camera",icon:<Icon name="camera" color={colors.grey} size={21}></Icon>, onPress:()=>{}},
        {name:"Choose from gallery",icon:<Icon name="image" color={colors.grey} size={21}></Icon>, onPress:()=>{}},
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
