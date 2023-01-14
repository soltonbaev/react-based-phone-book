import React from 'react';
import {globalContext} from '../../contexts/GlobalContext';
import {useContext} from 'react';
import Details from '../Details/Details';
import List from '../List/List';

const Home = () => {
   const {listState} = useContext(globalContext);
   return (
      <>
         <Details />
         <List key={listState} />
      </>
   );
};

export default Home;
