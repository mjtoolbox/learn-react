import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Component05 from './Component05';
import Query02 from './Query02';
import Home from './Home';
import Array03 from './Array03';
import List04 from './List04';
import Component01 from './Component01';
import Appbar from './Appbar';
import { Container } from '@mui/material';
import Listt from './Listt';
import ViewTodo from './ViewTodo';
import NewTask from './NewTask';

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Appbar />
      </Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
        <Route path='/query' element={<Query02 />} />
        <Route path='/viewtodo' element={<ViewTodo />} />
        <Route path='/list' element={<Listt />} />
        <Route path='/card' element={<Component05 />} />
        <Route path='/newtask' element={<NewTask />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
