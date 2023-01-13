import React, {createContext} from 'react';
import {useState} from 'react';
export const globalContext = createContext();
const GlobalContextProvider = ({children}) => {
   const [contactObj, setContactObj] = useState({});
   const [editBtns, editBtnsOn] = useState(false);
   const [listState, listRefresh] = useState(0);
   const [formsState, formsRefresh] = useState(1);
   const [infoState, infoRefresh] = useState(2);
   const [readOnly, setReadOnly] = useState(false);
   const [infoType, setInfoType] = useState('help');
   const [contactObjCopy, setContactObjCopy] = useState({});

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
            formsState,
            listRefresh,
            formsRefresh,
            infoState,
            infoRefresh,
            readOnly,
            setReadOnly,
            contactObjCopy,
            setContactObjCopy,
         }}
      >
         {children}
      </globalContext.Provider>
   );
};
export {GlobalContextProvider};
