import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
  logo: {
    height:150,
    width:'100%',
    alignSelf:'center',
    marginTop:50
    

  },
  title:{
      fontSize:21,
      textAlign:'center',
      paddingTop:20,
      fontWeight:"500"
      
  },
  subtitle:{
    fontSize:17,
    textAlign:'center',
    paddingTop:20,
    fontWeight:"500"
    
},
form:{
    paddingTop:20
},
signupSection:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:20
},
linkSignup:{
    paddingLeft:10,
    color:colors.primary,
    fontSize:16

},
infoText:{
    fontSize:17,
    paddingLeft:'20%',
}

});