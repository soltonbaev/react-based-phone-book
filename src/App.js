import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details';
import List from './components/List/List';
import {useContext} from 'react';
import {globalContext} from './contexts/GlobalContext';

function App() {
   const {listState, formsState} = useContext(globalContext);
   //  console.log('list', listRefresh);
   return (
      <div className="contacts">
         <header className="contacts__header">
            <h1>REACT BASED CONTACT BOOK</h1>
         </header>
         <main className="contacts__app">
            <Details />
            <List key={listState} />
         </main>
         <footer>© 2022 crafted by Ibraim Soltonbaev</footer>
      </div>
   );
}

export default App;
