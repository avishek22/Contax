import {StyleSheet} from 'react-native'
import colors from '../../assets/themes/colors'

export default StyleSheet.create({
    item:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center'

    },
    itemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20
    },
    name:{
        fontSize:17
    },
    phoneNumber:{
        color:colors.grey,
        fontSize:14,
        paddingVertical:5
    },
    icon:{
        paddingTop:'6%'
    },
   floatingActionButton:{
       backgroundColor:'red',
       width:55,
       height:55,
       position:'absolute',
       bottom:45,
       right:10,
       borderRadius:100,
       justifyContent:'center',
       alignItems:'center'
   }

})