import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authState';
import contactsInitialState from './initialStates/contactInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contact';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;