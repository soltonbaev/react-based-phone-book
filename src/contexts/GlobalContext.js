import React, {createContext} from 'react';
import {useState} from 'react';
export const globalContext = createContext();
const GlobalContextProvider = ({children}) => {
   const [contactObj, setContactObj] = useState({});
   const [editBtns, editBtnsOn] = useState(false);
   const [listState, listRefresh] = useState(0);
   const [infoType, setInfoType] = useState('help');

   return (
      <globalContext.Provider
         value={{
            setInfoType,
            infoType,
            contactObj,
            setContactObj,
            editBtns,
            editBtnsOn,
            listState,
            listRefresh,
         }}
      >
         {children}
      </globalContext.Provider>
   );
};
export {GlobalContextProvider};
