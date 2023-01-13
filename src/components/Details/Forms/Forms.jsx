import React, {useState} from 'react';
import EditBtns from './EditBtns';
import './Forms.css';
import {useAddContact} from '../../../functions/fetch';
import Inputs from './Inputs';
import {useContext} from 'react';
import {detailsContext} from '../../../contexts/DetailsContext';
import {globalContext} from '../../../contexts/GlobalContext';

const Forms = () => {
   const [inpState, clearInp] = useState(0);
   const [btnType, setBtnType] = useState('add');

   const {infoType, setInfoType} = useContext(detailsContext);
   const {editBtns} = useContext(globalContext);
   const {listState, listRefresh} = useContext(globalContext);
   const inpObj = {firstName: '', lastName: '', phoneNumber: '', photo: ''};

   function formInpObj(input) {
      if (input.id === 'name') {
         inpObj.firstName = input.value;
         console.log(inpObj);
      } else if (input.id === 'last-name') {
         inpObj.lastName = input.value;
         console.log(inpObj);
      } else if (input.id === 'phone-number') {
         inpObj.phoneNumber = input.value;
         console.log(inpObj);
      } else if (input.id === 'photo') {
         inpObj.photo = input.value;
         console.log(inpObj);
      }
   }

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
            formInpObj={formInpObj}
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
