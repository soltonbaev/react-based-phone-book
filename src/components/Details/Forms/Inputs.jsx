import React from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
import {useContext, useState, useEffect} from 'react';

const Inputs = ({
   firstNameState,
   lastNameState,
   phoneNumberState,
   photoState,
   setInputStates,
}) => {
   const {contactObj} = useContext(globalContext);
   // const {firstName, lastName, phoneNumber, photo} = contactObj;
   const [fName, setFName] = useState('');
   const [lName, setLName] = useState('');
   const [pNumber, setPNumber] = useState('');
   const [photoVal, setPhotoVal] = useState('');

   useEffect(() => {
      function setF() {
         // console.log(contactObj.firstName);
         setFName(contactObj.firstName);
         setLName(contactObj.lastName);
         setPNumber(contactObj.phoneNumber);
         setPhotoVal(contactObj.photo);
      }
      setF();
   }, [contactObj.firstName]);

   return (
      <>
         <input
            value={firstNameState}
            id="name"
            onChange={e => {
               setInputStates(e.target);
            }}
            onClick={() => {
               // setFName(null);
            }}
            placeholder="Enter your name"
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
            onClick={() => {
               // setLName(null);
            }}
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
            onClick={() => {
               // setPNumber(null);
            }}
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
            onClick={() => {
               // setPhotoVal(null);
            }}
         />
      </>
   );
};

export default Inputs;
