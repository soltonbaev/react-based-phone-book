import React from 'react';
import './Info.css';
import {useContext} from 'react';
import {globalContext} from '../../../contexts/GlobalContext';
const Content = () => {
   const {contactObj} = useContext(globalContext);

   return (
      <ul className="info__content">
         <li className="info__row">
            <span className="info__data contacts__info-name">
               {contactObj.firstName}
            </span>
            <span className="info__data contacts__info-lname">
               {contactObj.lastName}
            </span>
         </li>
         <li className="info__row">
            <span className="contacts__info-phone-label">Phone No:</span>
            <span className="info__data contacts__info-phone">
               {contactObj.phone}
            </span>
         </li>
         <li className="info__row info__photo">
            <div className="info__photo-wrapper">
               <img className="info__photo-img" src={contactObj.photo} alt="" />
            </div>
         </li>
      </ul>
   );
};

export default Content;
