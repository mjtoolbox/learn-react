import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Component01 from './Component01';
import Query02 from './Query02';
import Home from './Home';
import Array03 from './Array03';
import List04 from './List04';
import Component05 from './Component05';

function AppAlt() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
        <Route path='/query' element={<Query02 />} />
        <Route path='/array' element={<Array03 />} />
        <Route path='/list' element={<List04 />} />
        <Route path='/card' element={<Component05 />} />
      </Routes>
    </>
  );
}

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/test'>Test</Link>
      <Link to='/query'>Query</Link>
      <Link to='/array'>Array</Link>
      <Link to='/list'>List</Link>
      <Link to='/card'>Card</Link>
    </nav>
  );
};

export default AppAlt;
