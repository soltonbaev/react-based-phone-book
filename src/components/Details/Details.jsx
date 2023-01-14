import React, {useState} from 'react';
import Forms from './Forms/Forms';
import Info from './Info/Info';
import './Details.css';
import {useContext} from 'react';
import {globalContext} from '../../contexts/GlobalContext';

const Details = () => {
   const {formsState, infoState} = useContext(globalContext);
   return (
      <div className="contacts__column details">
         <Forms key={formsState} />
         <Info key={infoState} />
      </div>
   );
};

export default Details;
