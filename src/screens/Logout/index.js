import React, { useContext } from 'react'
import { View, Text,ActivityIndicator } from 'react-native'
import { useEffect } from 'react/cjs/react.development'
import logoutUser from '../../context/actions/auth/logoutUser'
import { GlobalContext } from '../../context/Provider'
const Logout = () => {
    const {authDispatch} = useContext(GlobalContext);
  
    useEffect(() => {
      logoutUser()(authDispatch);
    }, []);
  
    return <ActivityIndicator />;
  };
  
  export default Logout;
