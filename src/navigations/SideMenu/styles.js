import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
  logo: {
    height:150,
    width:'100%',
    alignSelf:'center',
    marginTop:50
    

  },
  item:{
      flexDirection:'row',
     // justifyContent:'center',
      alignItems:'center'
  },
  itemText:{
      fontSize:17,
      paddingVertical:7,
      paddingLeft:20
  }

});