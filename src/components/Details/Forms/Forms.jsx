import React, {useEffect, useState} from 'react';
import EditBtns from './EditBtns';
import './Forms.css';
import {useAddContact} from '../../../functions/fetch';
import Inputs from './Inputs';
import {useContext} from 'react';
// import {detailsContext} from '../../../contexts/DetailsContext';
import {globalContext} from '../../../contexts/GlobalContext';

const Forms = () => {
   const [inpState, clearInp] = useState(0);
   const [btnType, setBtnType] = useState('add');

   const {infoType, setInfoType, contactObj} = useContext(globalContext);
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
         console.log(firstNameState);
      } else if (input.id === 'last-name') {
         setLastName(input.value);
         console.log(lastNameState);
      } else if (input.id === 'phone-number') {
         setPhoneNumber(input.value);
         console.log(phoneNumberState);
      } else if (input.id === 'photo') {
         setPhoto(input.value);
         console.log(photoState);
      }
   }
   // function formInpObj(input) {
   //    if (input.id === 'name') {
   //       inpObj.firstName = input.value;
   //       console.log(inpObj);
   //    } else if (input.id === 'last-name') {
   //       inpObj.lastName = input.value;
   //       console.log(inpObj);
   //    } else if (input.id === 'phone-number') {
   //       inpObj.phoneNumber = input.value;
   //       console.log(inpObj);
   //    } else if (input.id === 'photo') {
   //       inpObj.photo = input.value;
   //       console.log(inpObj);
   //    }
   // }

   function SubmitInpObj() {
      console.log(inpObj);
      useAddContact(inpObj);
      //   console.log('setInfoType', setInfoType);
      setInfoType('help');
      console.log(infoType);
      clearInp(state => {
         state = state + 1;
         return state;
      });
      listRefresh(listState + 1);
   }
   return (
      <div className="details__forms forms">
         <Inputs
            key={inpState}
            // formInpObj={formInpObj}
            firstNameState={firstNameState}
            lastNameState={lastNameState}
            phoneNumberState={phoneNumberState}
            photoState={photoState}
            setInputStates={setInputStates}

            // contactObj={contactObj}
         />
         {!editBtns && (
            <button
               onClick={SubmitInpObj}
               className="forms__item forms__btn-add"
            >
               Add contact
            </button>
         )}
         {editBtns && <EditBtns inpObj={inpObj} />}
      </div>
   );
};

export default Forms;
