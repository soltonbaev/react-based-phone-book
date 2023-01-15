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
      setContactObj,
      contactObj,
      setInfoType,
      setActive,
      setNameEmpty,
   } = useContext(globalContext);

   return (
      <span className="contacts__edit-buttons forms__element_hidden">
         {editBtnsOn && (
            <button
               className="forms__item forms__form-button contacts__btn-update"
               onClick={async () => {
                  await updateContact(contactObj.id, inpObj);
                  setContactObj(inpObj);
                  listRefresh(listState + 1);
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
                  setActive(null);
                  setNameEmpty(false);
               }}
            >
               New
            </button>
         )}
         {editBtnsOn && (
            <button
               className="forms__item forms__form-button forms__btn-delete"
               onClick={async () => {
                  clearInputStates();
                  setContactObj({});
                  await deleteContact(contactObj.id);
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
