import './App.css';
import {NavLink} from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Tabs/Home';
import About from './components/Tabs/About';

function App() {
   return (
      <div className="contacts">
         <header className="contacts__header">
            <h3>REACT BASED </h3>
            <h1>CONTACT BOOK</h1>
            <div className="tabs">
               <span className="tabs__home">
                  <NavLink to="/">App</NavLink>
               </span>
               <span className="tabs__about">
                  <NavLink to="/about">About</NavLink>
               </span>
            </div>
         </header>
         <main className="contacts__app">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </main>
         <footer>© 2022 crafted by Ibraim Soltonbaev</footer>
      </div>
   );
}

export default App;
