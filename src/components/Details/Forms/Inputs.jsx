import React from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
import {useContext} from 'react';

const Inputs = ({
   firstNameState,
   lastNameState,
   phoneNumberState,
   photoState,
   setInputStates,
}) => {
   const {contactObj} = useContext(globalContext);

   return (
      <>
         <input
            value={firstNameState}
            id="name"
            onChange={e => {
               setInputStates(e.target);
            }}
            placeholder="Enter your name*"
            className="forms__item forms__input-name"
            type="text"
         />
         <input
            value={lastNameState}
            id="last-name"
            onChange={e => {
               setInputStates(e.target);
            }}
            placeholder="Enter your last name"
            className="forms__item forms__input-lname"
            type="text"
         />
         <input
            value={phoneNumberState}
            id="phone-number"
            onChange={e => {
               setInputStates(e.target);
            }}
            placeholder="Enter your phone number"
            className="forms__item forms__input-phone"
            type="number"
         />
         <input
            value={photoState}
            id="photo"
            onChange={e => {
               setInputStates(e.target);
            }}
            placeholder="Add photo URL"
            className="forms__item forms__input-photo"
            type="url"
         />
      </>
   );
};

export default Inputs;
