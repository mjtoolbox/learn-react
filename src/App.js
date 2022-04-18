import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Component01 from './Component01';
import Query02 from './Query02';
import Home from './Home';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Component01 />} />
        <Route path='/query' element={<Query02 />} />
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
    </nav>
  );
};

export default App;
