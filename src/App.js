import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Component05 from './Component05';
import Query02 from './Query02';
import Home from './Home';
import Array03 from './Array03';
import List04 from './List04';
import Component01 from './Component01';
import Appbar from './Appbar';

const App = () => {
  return (
    <React.Fragment>
      <Appbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
        <Route path='/query' element={<Query02 />} />
        <Route path='/array' element={<Array03 />} />
        <Route path='/list' element={<List04 />} />
        <Route path='/card' element={<Component05 />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
