import 'react-native-gesture-handler';
import React ,{useContext}from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, Text} from 'react-native'
import { AppRegistry } from "react-native";
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
import {GlobalContext} from '../context/Provider'
import { useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from './SideMenu/RootNavigator';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(isLoggedIn);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      console.log(`user data`,user )
      if (user!==null) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log('not found')
    }
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);
  console.log(`is authenticated`, isAuthenticated)
  console.log(`is authloaded`, authLoaded)
  console.log('logged in',isLoggedIn)

  return (
    
      
    <>
    {authLoaded ? (
      <NavigationContainer ref={navigationRef}>
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    ) : (
      <ActivityIndicator />
    )}
  </>
      
  );
};

export default AppNavContainer;