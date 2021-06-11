import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from "../Icon/index"
import styles from './styles';

const ImagePicker = React.forwardRef(({},ref) => {
    const options=[
        {name:"Take from camera",icon:<Icon name="camera"></Icon>, onPress:()=>{}},
        {name:"Choose from gallery",icon:<Icon name="image"></Icon>, onPress:()=>{}},
    ]
    return (
        <RBSheet
        ref={ref}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center"
          }
        }}
      >
         {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOption}
            key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </RBSheet>
    )

})

export default ImagePicker
