import {StyleSheet} from 'react-native';
import colors from '../../../assets/themes/colors';


export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
    alignItems:'center'
  },

  inputContainer: {
    paddingVertical: 12,
  },

  textInput: {
    flex: 1,
    width: '100%',
    color:'black'
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});