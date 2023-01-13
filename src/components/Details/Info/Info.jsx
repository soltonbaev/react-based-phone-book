import React from 'react';
import Content from './Content';
import {useState} from 'react';
import './Info.css';
import Help from './Help';
import {useContext} from 'react';

import {globalContext} from '../../../contexts/GlobalContext';

const Info = () => {
   const {infoType} = useContext(globalContext);

   return (
      <div className="details__info info">
         {infoType === 'content' && <Content />}
         {infoType === 'help' && <Help />}
      </div>
   );
};

export default Info;
