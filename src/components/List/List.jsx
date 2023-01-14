import React from 'react';
import './List.css';
import {fetchContact} from '../../functions/fetch';
import {useEffect} from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {globalContext} from '../../contexts/GlobalContext';

import {API} from '../../functions/useGlobals';
const List = () => {
   const [contacts, setContacts] = useState([]);
   const {setContactObj, editBtnsOn, setReadOnly, setInfoType} =
      useContext(globalContext);

   useEffect(() => {
      async function getData() {
         const res = await fetchContact();
         setContacts(res.data);
      }
      getData();
   }, []);

   return (
      <div className="contacts__column list">
         <ul className="list__wrapper">
            {contacts.map(contact => {
               return (
                  <li
                     onClick={() => {
                        setContactObj(contact);
                        editBtnsOn(true);
                        setInfoType('content');
                     }}
                     key={contact.id}
                     className="list__item"
                  >
                     <span className="list__first-name">
                        {contact.firstName}
                     </span>
                     <span className="list__last-name">{contact.lastName}</span>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default List;
