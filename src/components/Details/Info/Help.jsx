import React from 'react';
import './Info.css';
import {useContext} from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
const Help = () => {
   const {isNameEmpty} = useContext(globalContext);
   return (
      <div className="contacts__row info__help">
         <h3 className="info__help-heading">Click to add new contact</h3>
         <p className="info__help-p">
            or select existing contact from the list <br></br>
            <br></br>
            {isNameEmpty && (
               <span className="info__help-warning">
                  First name is required
               </span>
            )}
         </p>
      </div>
   );
};

export default Help;
