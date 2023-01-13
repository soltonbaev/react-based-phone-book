import React from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
import {useContext, useState, useEffect} from 'react';

const Inputs = ({formInpObj, removeReadOnly}) => {
   const {contactObj} = useContext(globalContext);

   const {setContactObj} = useContext(globalContext);
   const {readOnly} = useContext(globalContext);

   return (
      <>
         <input
            value={contactObj.firstName}
            id="name"
            onChange={e => {
               formInpObj(e.target);
            }}
            placeholder="Enter your name"
            className="forms__item forms__input-name"
            type="text"
            readOnly={readOnly && true}
         />
         <input
            value={contactObj.lastName}
            id="last-name"
            onChange={e => {
               formInpObj(e.target);
            }}
            placeholder="Enter your last name"
            className="forms__item forms__input-lname"
            type="text"
            readOnly={readOnly && true}
         />
         <input
            value={contactObj.phoneNumber}
            id="phone-number"
            onChange={e => {
               formInpObj(e.target);
            }}
            placeholder="Enter your phone number"
            className="forms__item forms__input-phone"
            type="number"
            readOnly={readOnly && true}
         />
         <input
            value={contactObj.photo}
            id="photo"
            onChange={e => {
               formInpObj(e.target);
            }}
            placeholder="Add photo URL"
            className="forms__item forms__input-photo"
            type="url"
            readOnly={readOnly && true}
         />
      </>
   );
};

export default Inputs;
