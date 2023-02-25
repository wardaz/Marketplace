import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Homepage from './pages/homepage';
import Contactus from './pages/contact'
import Explore from './pages/explore';
import NFTcard from './components/cards/nftcard';
import ItemDetails from './pages/itemdetails';
import Profile from './pages/profile';
import Author from './pages/author';

import Error from './components/404';

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/contact' element={<Contactus/>} />
    <Route path='/explore' element={<Explore/>} />
    <Route path='/trending' element={<NFTcard/>} />
    <Route path='/itemdetails' element={<ItemDetails/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/author' element={<Author/>} />

    <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
