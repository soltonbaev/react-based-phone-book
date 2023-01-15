import React, {useEffect, useState} from 'react';
import EditBtns from './EditBtns';
import './Forms.css';
import {addContact} from '../../../functions/fetch';
import Inputs from './Inputs';
import {useContext} from 'react';
import {globalContext} from '../../../contexts/GlobalContext';

const Forms = () => {
   const [inpState, clearInp] = useState(0);
   const {infoType, setInfoType, contactObj, setNameEmpty} =
      useContext(globalContext);
   const {editBtns} = useContext(globalContext);
   const {listState, listRefresh} = useContext(globalContext);
   const [firstNameState, setFirstName] = useState('');
   const [lastNameState, setLastName] = useState('');
   const [phoneNumberState, setPhoneNumber] = useState('');
   const [photoState, setPhoto] = useState('');
   const inpObj = {
      firstName: firstNameState,
      lastName: lastNameState,
      phoneNumber: phoneNumberState,
      photo: photoState,
   };

   useEffect(() => {
      function setStates() {
         console.log('firstNameState', firstNameState);
         setFirstName(contactObj.firstName);
         setLastName(contactObj.lastName);
         setPhoneNumber(contactObj.phoneNumber);
         setPhoto(contactObj.photo);
      }
      setStates();
   }, [contactObj.firstName]);

   function setInputStates(input) {
      if (input.id === 'name') {
         setFirstName(input.value);
      } else if (input.id === 'last-name') {
         setLastName(input.value);
      } else if (input.id === 'phone-number') {
         setPhoneNumber(input.value);
      } else if (input.id === 'photo') {
         setPhoto(input.value);
      }
   }

   function clearInputStates() {
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setPhoto('');
   }

   async function SubmitInpObj() {
      if (!firstNameState) {
         setNameEmpty(true);
         return;
      }
      await addContact(inpObj);
      setInfoType('help');
      clearInputStates();
      listRefresh(listState + 1);
      setNameEmpty(false);
   }
   return (
      <div className="details__forms forms">
         <Inputs
            key={inpState}
            firstNameState={firstNameState}
            lastNameState={lastNameState}
            phoneNumberState={phoneNumberState}
            photoState={photoState}
            setInputStates={setInputStates}
         />
         {!editBtns && (
            <button
               onClick={SubmitInpObj}
               className="forms__item forms__btn-add forms__form-button"
            >
               Add contact
            </button>
         )}
         {editBtns && (
            <EditBtns clearInputStates={clearInputStates} inpObj={inpObj} />
         )}
      </div>
   );
};

export default Forms;
