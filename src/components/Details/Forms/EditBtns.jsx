import React from 'react';
import './Forms.css';
import {useContext, useState} from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
import {deleteContact, updateContact} from '../../../functions/fetch';

const EditBtns = ({inpObj, clearInputStates}) => {
   const {
      editBtnsOn,
      listRefresh,
      listState,
      formsRefresh,
      formsState,
      setContactObj,
      contactObj,
      setReadOnly,
      setInfoType,
      contactObjCopy,
      setContactObjCopy,
      infoState,
      infoRefresh,
   } = useContext(globalContext);

   // const [editState, setEditState] = useState('update');
   function clearInputs() {
      let inps = document.querySelectorAll('input');
      inps.forEach(input => {
         input.value = '';
      });
   }

   return (
      <span className="contacts__edit-buttons forms__element_hidden">
         {/* {editState === 'edit' && (
            <button
               className="forms__item forms__form-button contacts__btn-edit"
               onClick={() => {
                  setContactObjCopy({...contactObj});
                  //   setContactObj({});
                  setEditState('update');
                  setReadOnly(false);
               }}
            >
               Edit
            </button>
         )} */}
         {editBtnsOn && (
            <button
               className="forms__item forms__form-button contacts__btn-update"
               onClick={e => {
                  updateContact(contactObj.id, inpObj);
                  //   console.log('contactObjCopy', contactObjCopy);
                  //   setContactObj(contactObjCopy);
                  setReadOnly(true);
                  // setEditState('edit');
                  listRefresh(listState + 1);
                  //   infoRefresh(infoState + 1);
               }}
            >
               Update
            </button>
         )}
         {editBtnsOn && (
            <button
               className="forms__item forms__form-button forms__btn-new"
               onClick={() => {
                  clearInputStates();
                  editBtnsOn(false);
                  setInfoType('help');
               }}
            >
               New
            </button>
         )}
         {editBtnsOn && (
            <button
               className="forms__item forms__form-button forms__btn-delete"
               onClick={() => {
                  clearInputStates();
                  setContactObj({});
                  deleteContact(contactObj.id);
                  setInfoType('help');
                  editBtnsOn(false);
                  listRefresh(listState + 1);
               }}
            >
               Delete
            </button>
         )}
      </span>
   );
};

export default EditBtns;
