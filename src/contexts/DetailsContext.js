import React, {createContext} from 'react';
import {useState} from 'react';
export const detailsContext = createContext();
const DetailsContextProvider = ({children}) => {
   const [infoType, setInfoType] = useState('content');
   //    function setType(value) {
   //       setInfoType(value);
   //    }
   return (
      <detailsContext.Provider value={{setInfoType, infoType}}>
         {children}
      </detailsContext.Provider>
   );
};
export {DetailsContextProvider};
